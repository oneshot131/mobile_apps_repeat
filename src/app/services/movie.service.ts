import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  episode = 'episode',
  movie = 'movie',
  series = 'series'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/'; // URL to the API we will use
  apiKey = '591562fa'; // My personal API key; last for 1000 days

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => { // Map our results to Search
        return results['Search'];
      })
    ); // Parameters s = string (the user searches a string) type is our enum SearchType we made above and our API key
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  } // Same as above for movie info
}
