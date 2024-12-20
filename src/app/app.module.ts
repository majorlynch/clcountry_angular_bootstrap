import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { NewsService } from './services/news.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { UtilityService } from './services/utility.service.service';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, NgbModule, NgbTooltipModule],
  providers: [CountryService, NewsService, WeatherService,  UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
