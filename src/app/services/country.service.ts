import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countriesArray: string[];

  constructor(private http: HttpClient) {
    this.countriesArray = [];
  }

  firstCountry: string = '';

  getCountry(country:string) {
    return this.http
      .get<any[]>('https://restcountries.com/v3.1/name/'+country)
      .pipe(
        map((response) => {
          return {
            capital: response[0].capital[0],
            name: response[0].name?.common,
            officialName:response[0].name?.official,
            region: response[0].region,
            subregion: response[0].subregion,
            continent: response[0].continent,
            tld:response[0].tld,
            cca2:response[0].cca2,
            cca3:response[0].cca3,
            independent:response[0].independent,
            population:response[0].population,
            googleMaps:response[0].maps?.googleMaps,
            flagpng: response[0].flags.png,
            flagsvg: response[0].flags.svg,
            flagalt: response[0].flags.alt,
            fifa:response[0].fifa,
            drivingLane:response[0].car.side,
            unMember:response[0].unMember,
            landlocked:response[0].landlocked,
            timezones:response[0].timezones,
            coatOfArms:response[0].coatOfArms?.svg,
          };
        })
      );
  }

  getCountryNames() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map((countries) =>
        countries.map((country) => {
          return country?.name.common;
        }).sort()
      )
    );
  }
}
