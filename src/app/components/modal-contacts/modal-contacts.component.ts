import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogRegService } from 'src/app/services/logReg/log-reg.service';

@Component({
  selector: 'app-modal-contacts',
  templateUrl: './modal-contacts.component.html',
  styleUrls: ['./modal-contacts.component.scss']
})
export class ModalContactsComponent {

  constructor(private dialogRef: MatDialog, public logRegRegister: LogRegService) { }


  closeDialog() {
    this.dialogRef.closeAll();
  }

}
