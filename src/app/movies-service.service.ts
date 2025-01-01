import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  constructor(private httpclient: HttpClient) {}

  getmovies(): Observable<any> {
    return this.httpclient.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ac4ca2fdf78da1a857a35e132fda928b&language=en-US&page=1'
    );
  }

  getmoviedetails(id: string): Observable<any> {
    return this.httpclient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ac4ca2fdf78da1a857a35e132fda928b&language=en-US`
    );
  }

  getseries(): Observable<any> {
    return this.httpclient.get(
      'http://www.omdbapi.com/?s=*&type=series&page=2&apikey=7a9033b2');
  }
}
