import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class NewsService {
    constructor (private http: HttpClient) {
    }

    getNews(location: string) {
        let countryUrl: string ='';
        countryUrl = 'https://content.guardianapis.com/world/' + location.toLowerCase() + '?api-key=6b245569-9ec6-428f-a7ad-ce857c53935d';
        return this.http.get(countryUrl);
    }
}