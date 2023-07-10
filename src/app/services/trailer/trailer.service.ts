import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

  constructor(private http: HttpClient, private dom: DomSanitizer) { }

  getUrlTrailer = (movieId: string) => {
    return this.http.get(`${environment.basicUrlMovie}${movieId}/videos?api_key=${environment.apikey}`)
  }

  sanitizeUrl = (key: string) => {
    return this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }
}
