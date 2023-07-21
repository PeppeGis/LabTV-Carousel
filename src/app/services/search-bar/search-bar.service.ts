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

  searchValue: string = ''
  moviesResults: Movie[] = []

  urlSearch = `${environment.basicUrlSearch}?api_key=${environment.apikey}`

  getSearched = (query?: string | any, page?: number) => {
    // ++this.pageFilm
    return this.http.get(`${this.urlSearch}&query=${query}&page=${page}}`)
  }
}