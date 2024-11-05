import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class NewsService {
    constructor (private http: HttpClient) {
    }

    getNews(location: string) {
        return this.http.get('https://content.guardianapis.com/world/ireland?api-key=6b245569-9ec6-428f-a7ad-ce857c53935d');
    }
}