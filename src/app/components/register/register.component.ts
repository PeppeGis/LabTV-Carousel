import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/models/user';
import { LogRegService } from 'src/app/services/logReg/log-reg.service';
import { ModalRegComponent } from '../modal-reg/modal-reg.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private logRegService: LogRegService, private route: Router, private dialogRef: MatDialog) { }

  registerForm: FormGroup
  messageError: string = ''

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // password: new FormControl(null, Validators.pattern['(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'])
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      privacy: new FormControl(null, Validators.required)
    })
  }

  onSubmit = (form: FormGroup) => {
    const body =
    {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      privacy: form.value.privacy
    }

    this.logRegService.register(body).subscribe({
      next: (data: LoggedUser) => {
        // console.log(data);
        this.registerForm.reset()
        this.dialogRef.open(ModalRegComponent)
      },
      error: err => this.messageError = err.error
    })
  }
}
