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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-23T11:44Z";
  
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 28,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 34,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 45,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 46,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 50,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 56,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 58,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 63,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 68,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 70,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 70,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 70,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 72,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 80,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 82,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 83,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 87,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 88,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 90,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 91,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 91,
            "movement": 12
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 94,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 100,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 112,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 114,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 125,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 126,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 126,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 128,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 132,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 133,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 134,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 135,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 137,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 138,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 151,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 168,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 174,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 178,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 18,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 36,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 48,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 66,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 69,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 79,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 87,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 92,
            "movement": -13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 94,
            "movement": -5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 95,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 103,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 105,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 108,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 109,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 112,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 117,
            "movement": -17
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 120,
            "movement": -27
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 122,
            "movement": -13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 127,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 129,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 131,
            "movement": 14
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 142,
            "movement": -31
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 143,
            "movement": -27
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 143,
            "movement": -9
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 151,
            "movement": -16
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 152,
            "movement": -1
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 160,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 169,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 172,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 176,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 184,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 191,
            "movement": -14
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
            "position": 23,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 24,
            "movement": -6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 30,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 33,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 37,
            "movement": -12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": -10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 56,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 58,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 61,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 68,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 68,
            "movement": -7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 68,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": -21
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 97,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 103,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 107,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 109,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 109,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 111,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 115,
            "movement": -23
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 116,
            "movement": -23
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 118,
            "movement": -31
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 131,
            "movement": -12
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 142,
            "movement": -8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 157,
            "movement": -16
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 187,
            "movement": -41
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 189,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": 22
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 23,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 30,
            "movement": -10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 32,
            "movement": 23
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 47,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 56,
            "movement": -14
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 77,
            "movement": -11
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 81,
            "movement": -14
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 95,
            "movement": -32
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 97,
            "movement": -30
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 145,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -17
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": 2
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
            "position": 13,
            "movement": 59
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 73,
            "movement": -50
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 7,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 45,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 49,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 55,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 69,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 75,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 79,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 93,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 133,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 135,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 154,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 159,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 183,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 193,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "MR",
            "name": "Mauritania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 173,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 179,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 180,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 189,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 192,
            "movement": 0
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
            "position": 40,
            "movement": 7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 168,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 195,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 120
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 149,
            "movement": -28
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
            "position": 51,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 128,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 134,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 153,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": 0
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
            "position": 146,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "GY",
            "name": "Guyana",
            "position": 69,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 120,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 0
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
            "position": 87,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 155,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 171,
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
            "position": 51,
            "movement": -3
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
            "position": 8,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BM",
            "name": "Bermuda",
            "position": 93,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 99,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 122,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
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
            "position": 146,
            "movement": 13
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
            "position": 182,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 94,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 140,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 179,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 95,
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
            "position": 56,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hold On",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 159,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
    "firstSeen": "2026-01-01",
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
  