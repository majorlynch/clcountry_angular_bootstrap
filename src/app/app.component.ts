import { Component, ViewChild, Inject, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from './services/country.service';
import { NewsService } from './services/news.service';
import { OnInit } from '@angular/core';
import { CountryFullModel } from './model/country.model';
import { WeatherInputModel } from './model/weather.model';
import { NewsModel } from './model/news.model';
import { UtilityService } from './services/utility.service.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CountryService, NewsService, WeatherService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('f', { static: false }) countryForm: NgForm;

  defaultCountry = 'Ireland';
  country: CountryFullModel;
  submitCountry: CountryFullModel;
  leadContent: NewsModel[];
  news: NewsModel[];
  countries: string[] = [];
  selectedCountry: string = 'Ireland';
  toolTipVisible: boolean = false;
  weatherData: any;

  constructor(
    private countryService: CountryService,
    private newsService: NewsService,
    private weatherService: WeatherService,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.countryService.getCountryNames().subscribe({
      next: (data) => {
        this.countries = data;
      },
    });



    this.countryService.getCountry(this.selectedCountry).subscribe({
      next: (data) => (this.country = data[0]),
    });
    
    const weatherParams: WeatherInputModel = {
      latitude: this.country.latlng[0],
      longitude: this.country.latlng[1],
      hourly: "temperature_2m"
    };

    this.weatherService.getWeather(weatherParams).subscribe({
      next: (data) => {
        console.log('HEY');
        console.log(weatherParams);
        this.weatherData = data;
        console.log(this.weatherData);
      }
    });
    

    this.newsService
      .getNews(this.defaultCountry)
      .subscribe({ next: (news: any) => { this.leadContent = news.response.leadContent; this.news = news.response.results; } });
  }

  onCountryChange(value: any): void {
    console.log(this.selectedCountry);
    this.countryService.getCountry(value).subscribe({
      next: (data) => ((this.country = data[0]), console.log(this.country)),
    });
    const weatherParams: WeatherInputModel = {
      latitude: this.country.latlng[0],
      longitude: this.country.latlng[1],
      hourly: "temperature_2m"
    };

    this.newsService
      .getNews(this.selectedCountry.toLowerCase())
      .subscribe({ next: (news: any) => { this.leadContent = news.response.leadContent; this.news = news.response.results; console.log(this.news); } }
      );

    this.weatherService.getWeather(weatherParams).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      }
    });
  }

  getTimeDifference(targetDate: Date): string { const currentDate = new Date(); const difference = targetDate.getTime() - currentDate.getTime(); const days = Math.floor(difference / (1000 * 60 * 60 * 24)); const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); const seconds = Math.floor((difference % (1000 * 60)) / 1000); return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`; }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(form.value.fifa);
    console.log(form.value?.country?.capital);
    //this.submitCountry.name = '';
  }
}
