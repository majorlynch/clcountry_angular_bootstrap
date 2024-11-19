
export interface CountryModel{
    capital: string;
    name: string;
    officialName: string;
    region: string;
    subregion: string;
    continent: string;
    tld: string;
    cca2: string;
    cca3: string;
    independent: string;
    population: string;
    googleMaps: string;
    flagpng:string;
    flagsvg:string;
    flagalt:string;
    fifa:string;
    drivingLane:string;
    unMember: string;
    landlocked: string;
    timezones: string;
    coatOfArms: string;
}

export interface CountryFullModel
    {
      name: {
        common: string,
        official: string,
        nativeName: {
          deu: {
            official: string,
            common: string
          }
        }
      },
      tld: string[],
      cca2: string,
      ccn3: string,
      cca3: string,
      cioc: string,
      independent: boolean,
      status: string,
      unMember: boolean,
      currencies: {
        currencyCode: {
          name: string,
          symbol: string
        }[]
      },
      idd: {
        root: string,
        suffixes: [
          suffix:string
        ]
      }[],
      capital: string[
      ],
      altSpellings: string[],
      region: string,
      subregion: string,
      languages: {
        language: string
      },
      translations: {
        translation: {
          official: string,
          common: string,
        }[],
      },
      latlng: string[],
      landlocked: boolean,
      borders: string[],
      area: string,
      demonyms: {
        demonyn: {
          f: string,
          m: string,
        }[]
      },
      flag: string,
      maps: {
        googleMaps: string,
        openStreetMaps: string,
      },
      population: number,
      gini: {
        year: string
      },
      fifa: string,
      car: {
        signs: string[],
        side: string
      },
      timezones: string[],
      continents: string[],
      flags: {
        png: string,
        svg: string,
        alt: string,
      },
      coatOfArms: {
        png: string,
        svg: string
      }[],
      startOfWeek: string,
      capitalInfo: {
        latlng:  number[]
      },
      postalCode: {
        format: string,
        regex: string
      }
    }
  ;