import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent {

  constructor(private dialogRef: MatDialog) { }


  closeDialog() {
    this.dialogRef.closeAll();
  }

}
