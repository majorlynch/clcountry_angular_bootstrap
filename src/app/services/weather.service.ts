import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { WeatherInputModel } from "../model/weather.model";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    constructor (private http: HttpClient) {
    }

    getWeather(weatherInput: WeatherInputModel) {
        let params = new HttpParams();
        params.set('latitude', '52.52')
              .set('longitude', '13.41')
              .set('hourly', 'temperature_2m');
        return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo');
    }
}  