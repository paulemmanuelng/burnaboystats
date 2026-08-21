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
  export const liveChartsUpdated = "2026-08-21";
  
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
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": 190
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 18,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 20,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 20,
            "movement": 32
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 25,
            "movement": -11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 25,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": -2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 32,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 36,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 39,
            "movement": 57
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 40,
            "movement": 22
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 42,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 43,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": -23
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 48,
            "movement": 84
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 53,
            "movement": 29
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 54,
            "movement": -8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 54,
            "movement": 81
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 55,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 55,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 61,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -25
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 41
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 71,
            "movement": 9
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 72,
            "movement": -31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 74,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 75,
            "movement": -5
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 75,
            "movement": -28
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 77,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 78,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": -17
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 80,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 89,
            "movement": 11
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 97,
            "movement": 103
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 110,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -35
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 117,
            "movement": -26
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 120,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 123,
            "movement": 34
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": -19
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 142,
            "movement": -42
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 143,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": 54
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 145,
            "movement": -3
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 150,
            "movement": 42
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 160,
            "movement": -67
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 165,
            "movement": -20
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 165,
            "movement": -34
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 166,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 189,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 197,
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
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 31,
            "movement": -5
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 42,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 54,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 79,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 87,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 98,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 102,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 106,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 109,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 111,
            "movement": -3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 114,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 115,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 119,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 120,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 127,
            "movement": -4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 130,
            "movement": 3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 134,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 135,
            "movement": -42
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 142,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 145,
            "movement": -25
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 156,
            "movement": 10
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 157,
            "movement": -1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 158,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 158,
            "movement": 7
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 159,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 162,
            "movement": 21
          },
          {
            "country": "FR",
            "name": "France",
            "position": 171,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": 9
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 185,
            "movement": 6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 15,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 25,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 41,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 50,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 63,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 80,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 88,
            "movement": -12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 90,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 90,
            "movement": -11
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 93,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 106,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 111,
            "movement": -21
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 111,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 119,
            "movement": -24
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 123,
            "movement": -9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 126,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 170,
            "movement": -35
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 179,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 188,
            "movement": -31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 197,
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 2,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": -1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 13,
            "movement": 41
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": -13
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 37,
            "movement": -11
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 64,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -94
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
            "position": 39,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -25
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
            "country": "SR",
            "name": "Suriname",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": 11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 40,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 45,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 46,
            "movement": -15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": 28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 74,
            "movement": -23
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 76,
            "movement": -13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 90,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -88
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -31
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 123,
            "movement": -35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 132,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -33
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 149,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": -63
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 173,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -22
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
            "position": 89,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 8
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 58,
            "movement": 91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 32
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 40
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": -80
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": -13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -12
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
            "position": 98,
            "movement": -69
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
            "country": "BM",
            "name": "Bermuda",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 143,
            "movement": 28
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 156,
            "movement": -15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": 10
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
            "position": 76,
            "movement": -15
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
            "position": 5,
            "movement": 15
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 75,
            "movement": -41
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 99,
            "movement": -61
          },
          {
            "country": "US",
            "name": "United States",
            "position": 105,
            "movement": 11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 108,
            "movement": -33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 123,
            "movement": 21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
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
            "country": "US",
            "name": "United States",
            "position": 196,
            "movement": -40
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
            "position": 30,
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
            "position": 14,
            "movement": -3
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
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 164,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 168,
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
            "position": 12,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -30
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
            "position": 137,
            "movement": 19
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -59
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 197,
            "movement": -188
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -114
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
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
            "position": 80,
            "movement": 115
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 142,
            "movement": null,
            "status": "new"
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
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -2
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
            "position": 112,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 156,
            "movement": null,
            "status": "new"
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
            "position": 147,
            "movement": -11
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
            "position": 85,
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
  