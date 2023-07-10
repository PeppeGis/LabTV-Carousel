import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movie } from 'src/app/models/movie';
import { BehaviorSubject } from 'rxjs';
import { Result } from 'src/app/models/similar-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  filmToShow$ = new BehaviorSubject<Movie | undefined>(undefined)

  movies: Movie[] = []

  popular: Movie[] = []
  nowPlaying: Movie[] = []
  topRated: Movie[] = []
  upcoming: Movie[] = []

  getPopularMovies = () => {
    return this.http.get(`${environment.basicUrlMovie}popular?api_key=${environment.apikey}&language=enUS&page=1`)
  }

  getNowPlayingMovies = () => {
    return this.http.get(`${environment.basicUrlMovie}now_playing?api_key=${environment.apikey}&language=enUS&page=1`)
  }

  getTopRatedMovies = () => {
    return this.http.get(`${environment.basicUrlMovie}top_rated?api_key=${environment.apikey}&language=enUS&page=1`)
  }

  getUpcomingMovies = () => {
    return this.http.get(`${environment.basicUrlMovie}upcoming?api_key=${environment.apikey}&language=enUS&page=1`)
  }

  getDetailsMovies = (movieId: string) => {
    return this.http.get(`${environment.basicUrlMovie}${movieId}?api_key=${environment.apikey}&append_to_response=credits`)
  }
}
