import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LogRegService } from 'src/app/services/logReg/log-reg.service';
import { ModalContactsComponent } from '../modal-contacts/modal-contacts.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private logRegService: LogRegService, private dialogRef: MatDialog) { }

  contactForm: FormGroup

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, [Validators.required, Validators.maxLength(150)])
    })
  }

  onSubmit = (form: FormGroup) => {
    const body =
    {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    }

    if (this.contactForm.valid) {
      this.logRegService.message = 'Message sent correctly'
      this.dialogRef.open(ModalContactsComponent)
      this.contactForm.reset()
    } else {
      this.logRegService.message = 'Error sending message. Check the entered data'
      this.dialogRef.open(ModalContactsComponent)
    }
  }
}
