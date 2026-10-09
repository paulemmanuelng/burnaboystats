// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-09T13:23Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 6,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": 37
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 47
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 45,
            "movement": 26
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 55,
            "movement": -9
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 80,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 97,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 139,
            "movement": 4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 153,
            "movement": 15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 156,
            "movement": -58
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 194,
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
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
            "movement": -25
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -11
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 102,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": -5
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
            "position": 12,
            "movement": -2
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
            "position": 64,
            "movement": -58
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
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 69,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": 17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 82,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 103,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
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
            "position": 2,
            "movement": -1
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
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 46,
            "movement": 22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 47,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": 40
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": 29
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 179,
            "movement": -147
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 198,
            "movement": -41
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
            "position": 25,
            "movement": 17
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 78,
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
            "position": 19,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 132
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 58
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 30,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 36
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -65
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 101,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": -28
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 138,
            "movement": -75
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 173,
            "movement": -86
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": 13
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 80,
            "movement": -58
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 88,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": -34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": -10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 173,
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
            "position": 8,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 85
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 54
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": 31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 186,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -10
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
            "position": 39,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 42,
            "movement": -1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": 27
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 136,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": 11
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": -17
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
            "position": 158,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
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
            "position": 15,
            "movement": -3
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
            "movement": 7
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 61
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": 30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
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
            "position": 12,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -2
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
            "position": 26,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 113
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 70,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 79,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
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
            "position": 88,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 55,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 149,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -100
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 191,
            "movement": -37
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
            "position": 135,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 143,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 161,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
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
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
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
            "position": 24,
            "movement": 4
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
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 63,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -42
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": 26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": -122
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
            "movement": -8
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
            "position": 7,
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
            "position": 38,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 114
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -3
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
            "position": 52,
            "movement": -2
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
            "position": 16,
            "movement": 43
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -14
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
            "position": 105,
            "movement": 3
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
            "position": 9,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 104
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
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
            "position": 59,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
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
            "position": 47,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 47
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
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
            "position": 54,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": -96
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 111,
            "movement": 10
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
            "position": 63,
            "movement": -4
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
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
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
            "position": 122,
            "movement": 0
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
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 50
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 70
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -98
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
            "position": 127,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 10
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
            "position": 45,
            "movement": -2
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
            "position": 116,
            "movement": -2
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
            "position": 89,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 152,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": -65
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -64
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 89
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
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
            "position": 107,
            "movement": -9
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
            "position": 47,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
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
            "position": 164,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
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
            "position": 154,
            "movement": -10
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
            "position": 198,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 64
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -11
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
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 74
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
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
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
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
            "position": 104,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 0
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
            "position": 196,
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
            "position": 114,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 6
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
            "position": 149,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
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
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 4
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2:30",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e6c71c7ed5e7a36560c69937e7947afc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Worldwide",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Whine",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baba God",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PALAZZO",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0bcd709f154f3696394779095ad0c3c9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness (feat. Asake, Gunna)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid (feat. Asake, Wizkid, Skillibeng)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You (PBUY)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top (Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/97eb0aab44d059e2cfac9297d2d6733b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba (Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
  