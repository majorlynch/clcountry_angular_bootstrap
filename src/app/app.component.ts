import { Component, ViewChild,  Inject, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from './services/country.service';
import { NewsService } from './services/news.service';
import { OnInit } from '@angular/core';
import { CountryFull } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CountryService, NewsService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('f', {static: false}) countryForm: NgForm;

  defaultCountry = 'Ireland';
  country: CountryFull;
  submitCountry : CountryFull;
  countries: string[] = [];
  selectedCountry: string = 'Ireland';
  toolTipVisible: boolean = false;
  news: any;

  constructor(private countryService: CountryService,
              private newsService: NewsService
  ) {
  }


  ngOnInit() {
    this.countryService.getCountryNames().subscribe({
      next: (data) => {
        this.countries = data;
      },
    });

    this.countryService.getCountry(this.selectedCountry)
    .subscribe({
      next: (data) => (this.country = data[0]),
    });

    this.newsService.getNews(this.defaultCountry)
    .subscribe(news => this.news = news);
    }

  onCountryChange(value: any): void {
    console.log(this.selectedCountry);
    this.countryService.getCountry(value)
    .subscribe({
      next: (data) => (this.country = data[0],
        console.log(this.country)
      ),
    });
    this.newsService.getNews(this.selectedCountry.toLowerCase())
    .subscribe(news => this.news = news);
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
