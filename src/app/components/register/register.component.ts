import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogRegService } from 'src/app/services/logReg/log-reg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private logRegService: LogRegService) { }

  registerForm: FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // password: new FormControl(null, Validators.pattern['(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'])
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit = (form: FormGroup) => {
    const body =
    {
      firstname: form.value.firstname,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password
    }

    this.logRegService.register(body)
    this.registerForm.reset()
  }

}
