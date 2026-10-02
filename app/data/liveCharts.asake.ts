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
  export const liveChartsUpdated = "2026-10-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-01T22:44Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
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
            "position": 1,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 17,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 19,
            "movement": 51
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": -5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 29,
            "movement": 165
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 36,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 55,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 70,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 95,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 98,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 108,
            "movement": -63
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 126,
            "movement": 50
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 130,
            "movement": 15
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 143,
            "movement": -47
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 171,
            "movement": -39
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 187,
            "movement": -149
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
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 133,
            "movement": -20
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 74,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": 54
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
            "position": 42,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 98,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -37
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
            "position": 7,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -2
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 75,
            "movement": 27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 116,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 146,
            "movement": 48
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "position": 16,
            "movement": 1
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
            "position": 6,
            "movement": 20
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
            "position": 12,
            "movement": -6
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": 22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -104
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 184,
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
            "movement": 2
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
            "position": 117,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 95
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -36
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": -45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": -24
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 6
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
            "position": 35,
            "movement": 7
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
            "position": 40,
            "movement": 0
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
            "movement": 32
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
            "position": 50,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -37
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 67,
            "movement": 15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": 32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -80
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": -6
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 128,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": -31
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "position": 155,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -5
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
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": -63
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 169,
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
            "position": 21,
            "movement": 33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
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
            "position": 68,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 77
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 27,
            "movement": 7
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
            "position": 98,
            "movement": -5
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
            "position": 36,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -43
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": 106
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -29
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 133,
            "movement": 59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": 26
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
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 75,
            "movement": 114
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -30
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 102,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": 56
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
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
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -32
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
            "position": 21,
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
            "position": 122,
            "movement": -111
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
            "position": 10,
            "movement": 36
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
            "position": 20,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -54
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 68
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
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
            "position": 13,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -84
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 28
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
            "position": 87,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 25,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -55
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
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
            "position": 93,
            "movement": -5
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
            "position": 64,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -45
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
            "position": 44,
            "movement": -7
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
            "position": 151,
            "movement": -129
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
            "position": 27,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
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
            "position": 70,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
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
            "position": 48,
            "movement": 14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": -48
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -10
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
            "movement": -24
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
            "position": 30,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -119
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
            "position": 49,
            "movement": 4
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
            "position": 36,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -13
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
            "movement": 5
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
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 112,
            "movement": -21
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
            "position": 69,
            "movement": 1
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
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": null,
            "status": "re"
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
            "position": 71,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -92
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
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
            "position": 114,
            "movement": -12
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
            "position": 54,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
            "movement": -91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": -127
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 106,
            "movement": -16
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
            "position": 44,
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
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 48
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 149,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 133,
            "movement": 13
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 24
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
            "position": 126,
            "movement": 13
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
            "position": 94,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -70
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -99
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": -69
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
            "position": 40,
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
            "position": 36,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": 39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
            "movement": -99
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
            "position": 53,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -91
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
            "position": 97,
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
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
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
            "position": 115,
            "movement": 42
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
            "position": 182,
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
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": -11
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
            "position": 73,
            "movement": -10
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
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 91
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -65
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
            "position": 47,
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
            "position": 104,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 44
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
            "position": 76,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": -66
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
            "position": 170,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -19
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
            "position": 130,
            "movement": -120
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": -9
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
            "position": 156,
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
            "position": 87,
            "movement": -5
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
            "position": 60,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": 11
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
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
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
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
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 25
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
            "position": 149,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": -19
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
            "position": 128,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 143,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 128,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": 37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 131,
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
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ligali",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
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
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
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
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -116
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
  