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
  export const liveChartsUpdated = "2026-08-20";
  
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 16,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 24,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 24,
            "movement": 0
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 28,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 33,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 37,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 39,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 41,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 46,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 47,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 52,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 52,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 58,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 59,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 70,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 72,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 72,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 77,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 82,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 91,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 92,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 93,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 94,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 96,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 100,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 100,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 105,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 110,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 115,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 116,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 117,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 128,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 131,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 132,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 135,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 142,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 145,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 164,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 173,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 175,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 192,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 192,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 193,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 195,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
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
            "country": "HR",
            "name": "Croatia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 13,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 14,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 20,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 30,
            "movement": 4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 32,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 47,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 47,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 48,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 56,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 65,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 69,
            "movement": -23
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 76,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 87,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 89,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 94,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 94,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 103,
            "movement": 10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 108,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 110,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 112,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 114,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 122,
            "movement": 2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 123,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 128,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 130,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": -14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 149,
            "movement": -10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 155,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 158,
            "movement": 2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 160,
            "movement": -9
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 161,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 162,
            "movement": -13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 164,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": -7
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 179,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -6
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 193,
            "movement": -10
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 195,
            "movement": -22
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 197,
            "movement": -11
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
            "movement": -2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 19,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 29,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 40,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 41,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 47,
            "movement": 8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 56,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 59,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 78,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 79,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 90,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 92,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 94,
            "movement": -12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 95,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 100,
            "movement": -14
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 105,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 114,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 129,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 135,
            "movement": 6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 146,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 157,
            "movement": -3
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 170,
            "movement": -17
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
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 8,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 10,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 19,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": 32
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 39,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 65,
            "movement": -45
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 84,
            "movement": 98
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 155,
            "movement": -70
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
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -43
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -45
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": -33
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 85,
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
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 40,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 51,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 61,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 63,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 85,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 95,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 98,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 122,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 142,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 145,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 160,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 177,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 182,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": 0
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
            "position": 141,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
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
            "position": 68,
            "movement": -12
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
            "position": 122,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 88,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": 0
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
            "position": 29,
            "movement": -20
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
            "country": "DM",
            "name": "Dominica",
            "position": 130,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 171,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 186,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -21
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
            "position": 156,
            "movement": 3
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
            "position": 41,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 34,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 38,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 75,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 116,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 144,
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
            "position": 14,
            "movement": 3
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
            "position": 200,
            "movement": -54
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
            "position": 28,
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 141,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 155,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 171,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
            "movement": 0
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
            "position": 60,
            "movement": -15
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
            "position": 85,
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
            "country": "DZ",
            "name": "Algeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 138,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 140,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 181,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 195,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": 0
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": 0
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
            "position": 115,
            "movement": 26
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
            "position": 80,
            "movement": 0
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
            "movement": 0
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
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -34
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
            "position": 97,
            "movement": 0
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
            "position": 142,
            "movement": -7
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
  