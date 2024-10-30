import { Component, ViewChild,  Inject, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from './services/country.service';
import { OnInit } from '@angular/core';
import { Country } from './model/country.model';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CountryService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('f', {static: false}) countryForm: NgForm;
  country: Country;
  submitCountry : Country;
  countries: string[] = [];
  selectedCountry: string = 'Ireland';
  toolTipVisible: boolean = false;

  constructor(private countryService: CountryService) {


    //this.submitCountry = {...this.country};
    //this.signupForm = '';

  }


  ngOnInit() {
    this.country ={
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

  onSubmit(form: NgForm)
  {
    console.log(form);
    console.log(form.value)
    console.log(form.value.fifa)
    console.log(form.value?.country?.capital)
    //this.submitCountry.name = '';
  }
}
