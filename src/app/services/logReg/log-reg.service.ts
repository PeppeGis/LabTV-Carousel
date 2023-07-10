import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users'

  user: User

  token$ = new Subject

  register = (body: any) => {
    return this.http.post<User[]>(this.url, body).subscribe({
      next: (data: any) => {
        this.token$ = data.accessToken
        // console.log(this.token$)
      }
    })
  }

  login = (body: any) => {
    return this.http.post<User[]>(this.url, body).subscribe({
      next: (data: any) => {
        this.token$ = data.accessToken
        // console.log(this.token$)
      }
    })
  }

  httpOptions: any = {
    headers: new HttpHeaders(
      `{Authorization' 'Bearer ${this.token$}}`
    )
  }
}
