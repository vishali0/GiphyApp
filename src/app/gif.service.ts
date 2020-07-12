import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=%${environment.key}&limit=50`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);

      });
  }
  searchGifs(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=%${environment.key}&limit=50`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);

      });

  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
