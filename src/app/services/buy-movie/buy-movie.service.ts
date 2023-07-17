import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogRegService } from '../logReg/log-reg.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class BuyMovieService {

  constructor(private http: HttpClient, private logRegService: LogRegService, private router: Router) { }

  private url = 'http://localhost:3000/'

  getMedia = (): Observable<Movie[]> => {
    return this.http.get<Movie[]>(this.url + 'films-acquistati')
  }

  postMedia = (movie: Movie): Observable<Movie[]> => {
    const loggedUser = this.logRegService.getLoggedUser()
    const body = {
      id: movie.id,
      cover: movie.poster_path,
      title: movie.title
    }

    if (loggedUser) {

      return this.http.post<Movie[]>(this.url + 'films-acquistati', body)
    }
    this.router.navigate(['/login'])
    return of([])
  }

  deleteMovie = (id: any) => {
    return this.http.delete(`${this.url}films-acquistati/${id}`)
  }
}
