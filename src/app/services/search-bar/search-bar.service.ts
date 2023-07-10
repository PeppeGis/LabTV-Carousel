import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) {
  }

  searchValue$ = new BehaviorSubject<string>('')

  pageFilm = 1
  moviesResults: Movie[] = []

  urlSearch = `${environment.basicUrlSearch}?api_key=${environment.apikey}`

  getSearched = (query?: string) => {
    // ++this.pageFilm
    return this.http.get(`${this.urlSearch}&query=${this.searchValue$.value}&page=${this.pageFilm}}`)
  }
}