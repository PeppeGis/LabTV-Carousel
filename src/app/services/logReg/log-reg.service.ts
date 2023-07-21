import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoggedUser, LoginDto, RegisterDto, User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/'

  loginStatus = false

  token$ = new Subject

  username: string = ''

  register = (user: RegisterDto): Observable<LoggedUser> => {
    return this.http.post<LoggedUser>(this.url + "users", user)
  }

  login = (user: LoginDto): Observable<LoggedUser> => {
    return this.http.post<LoggedUser>(this.url + "login", user)
  }

  logout = () => {
    localStorage.removeItem('user')
    this.loginLogout()
  }

  setLoggedUser = (user: LoggedUser) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getLoggedUser = (): LoggedUser | null => {
    const userStorage = localStorage.getItem("user")
    if (userStorage) {
      return JSON.parse(userStorage) as LoggedUser
    }
    return null
  }

  loginLogout = () => {
    if (localStorage.getItem('user')) {
      this.loginStatus = true
    } else {
      this.loginStatus = false
    }
  }

  nameUser = () => {
    const name = JSON.parse(localStorage.getItem('user'))
    this.username = name.user.firstname
  }
}