import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, tap, filter  } from 'rxjs';
import { CountryFull } from '../model/country.model';

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
      .get<CountryFull[]>('https://restcountries.com/v3.1/name/'+country)
      .pipe(
          tap(x => console.log('before', x)),
          map(x => x.filter(a => a.name.common === country)),
          tap(x => console.log('after', x)),
      );
  }

  getCountryNames<CountryFull>() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map((countries) =>
        countries.map((country) => {
          return country?.name.common;
        }).sort()
      )
    );
  }
}
