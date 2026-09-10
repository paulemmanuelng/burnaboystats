# Certified-units comparison — threshold worklist

Scope for the artist-vs-artist certified-units page. Generated from the cert
arrays in `app/data/certifications.ts` (albums/singles/features) and
`app/data/afrobeats.ts` (`releases[].kind`), counting PLAQUES only — chart-peak
country codes are excluded, which is why this is 27 and not the ~69 a naive
grep for `c: "XX"` returns.

**27 certification countries. 1,212 plaques. 16 artists.**

Every one needs: single threshold, album threshold, per tier, from the body's
own published page. `null` where a body does not publish them — never a guess.

```

CERT COUNTRIES: 27   TOTAL PLAQUES: 1212   (COUNTRIES map defines 26)

code  tot  sng  alb  fea  maxX  tiers                       named?
NG     668  504    3  161     8  Gold/Platinum/Silver       TurnTable (TCSN)
UK      96   55   13   28     8  Gold/Platinum/Silver       BPI
CA      67   41    6   20     4  Diamond/Gold/Platinum      Music Canada
FR      57   34    4   19     1  Diamond/Gold/Platinum      SNEP
NZ      55   33    5   17    10  Gold/Platinum              RMNZ
US      48   33    3   12    16  Diamond/Gold/Platinum      RIAA
ZA      27   19    1    7    19  Gold/Platinum              RiSA
CH      26   17    4    5     4  Gold/Platinum              IFPI
PT      22   12    0   10     9  Gold/Platinum              AFP
AU      19    8    0   11    17  Gold/Platinum              ARIA
DK      18    9    3    6     5  Gold/Platinum              IFPI Denmark
BR      15    6    2    7     2  Diamond/Gold/Platinum      Pro-Música Brasil
ES      14   10    0    4     5  Gold/Platinum              Promusicae
NL      11    5    4    2     2  Gold/Platinum              NVPI
SE      10    6    2    2     7  Gold/Platinum              GLF
IT       9    5    0    4     6  Gold/Platinum              FIMI
PL       9    4    1    4     4  Diamond/Gold/Platinum      ZPAV
AT       8    5    0    3     1  Gold/Platinum              IFPI Austria
GR       7    4    0    3     3  Gold/Platinum              IFPI Greece
DE       7    3    0    4     1  Diamond/Gold/Platinum      BVMI
BE       5    2    0    3     3  Platinum                   Ultratop
NO       4    2    1    1     1  Gold/Platinum              IFPI Norway
HU       3    3    0    0     2  Gold/Platinum              MAHASZ
MX       3    2    0    1     4  Gold/Platinum              —
CO       2    2    0    0     1  Diamond/Gold               Pro Musica Colombia
SK       1    1    0    0     1  Platinum                   ČNS IFPI (Slovakia)
CZ       1    1    0    0     1  Gold                       ČNS IFPI (Czechia)```
