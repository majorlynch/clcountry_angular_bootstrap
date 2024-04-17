import { Component, Inject, Injectable } from '@angular/core';
import { CountryService } from './services/country.service';
import { OnInit } from '@angular/core';
import { Country } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CountryService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  country: Country;
  countries: string[] = [];
  selectedCountry: string = 'Ireland';

  constructor(private countryService: CountryService) {
    this.country = {
      name: '',
      capital: '',
      officialName: '',
      region: '',
      subregion: '',
      continent: '',
      tld: '',
      cca2: '',
      cca3: '',
      independent: '',
      population: '',
      googleMaps: '',
      flagpng: '',
      flagsvg: '',
      flagalt: '',
      fifa: '',
      drivingLane: '',
      unMember: '',
      landlocked: '',
      timezones: '',
      coatOfArms: '',
    };
  }

  ngOnInit() {
    this.countryService.getCountryNames().subscribe({
      //next: data => {return data.flat();
      next: (data) => {
        this.countries = data;
      },
    });

    this.countryService.getCountry(this.selectedCountry).subscribe({
      next: (data) => (this.country = data),
    });
  }

  onCountryChange(value: any): void {

    this.countryService.getCountry(value).subscribe({
      next: (data) => (this.country = data,
        console.log(this.country)
      ),
    });
  }
}
