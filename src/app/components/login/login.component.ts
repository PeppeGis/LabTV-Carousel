import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogRegService } from 'src/app/services/logReg/log-reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient, private route: Router, private logRegService: LogRegService) { }

  loginForm: FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit = (form: FormGroup) => {
    this.logRegService.login(this.loginForm.getRawValue()).subscribe(user => {
      this.logRegService.setLoggedUser(user)
      this.route.navigateByUrl('/dashboard-logged')
    })
  }
}
