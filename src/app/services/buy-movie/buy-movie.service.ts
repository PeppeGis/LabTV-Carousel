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

    if (loggedUser) {

      return this.http.post<Movie[]>(this.url + 'films-acquistati', movie)
    }
    this.router.navigate(['/login'])
    return of([])
  }
}
