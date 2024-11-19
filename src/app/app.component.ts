import { Component, ViewChild, Inject, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from './services/country.service';
import { NewsService } from './services/news.service';
import { OnInit } from '@angular/core';
import { CountryFullModel } from './model/country.model';
import { NewsModel } from './model/news.model';
import { UtilityService } from './services/utility.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CountryService, NewsService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('f', { static: false }) countryForm: NgForm;

  defaultCountry = 'Ireland';
  country: CountryFullModel;
  submitCountry: CountryFullModel;
  news: NewsModel[];
  countries: string[] = [];
  selectedCountry: string = 'Ireland';
  toolTipVisible: boolean = false;

  constructor(
    private countryService: CountryService,
    private newsService: NewsService,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.countryService.getCountryNames().subscribe({
      next: (data) => {
        this.countries = data;
      },
    });

    this.countryService.getCountry(this.selectedCountry).subscribe({
      next: (data) => (this.country = data[0]),
    });

    this.newsService
      .getNews(this.defaultCountry)
      .subscribe({next:(news: any) => (this.news = news.response.leadContent)});
  }

  onCountryChange(value: any): void {
    console.log(this.selectedCountry);
    this.countryService.getCountry(value).subscribe({
      next: (data) => ((this.country = data[0]), console.log(this.country)),
    });
    this.newsService
      .getNews(this.selectedCountry.toLowerCase())
      .subscribe({next:(news: any) => (this.news = news.response.leadContent)}
      //{complete:() => this.news = this.news.array.forEach((e : any) => {e.webUrl = this.utilityService.sanitizeUrl(e.webUrl)})})
  );
  }

  safeUrl( url: string) {
    return this.utilityService.sanitizeUrl(url);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(form.value.fifa);
    console.log(form.value?.country?.capital);
    //this.submitCountry.name = '';
  }
}
