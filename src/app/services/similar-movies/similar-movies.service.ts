import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SimilarMoviesService {

  constructor(private http: HttpClient) { }

  getSimilarMovies = (movieId: string) => {
    return this.http.get(`${environment.basicUrlMovie}${movieId}/similar?api_key=${environment.apikey}`)
  }
}
