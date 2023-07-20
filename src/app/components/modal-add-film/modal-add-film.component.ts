import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-film',
  templateUrl: './modal-add-film.component.html',
  styleUrls: ['./modal-add-film.component.scss']
})
export class ModalAddFilmComponent {

  constructor(private dialogRef: MatDialog) { }


  closeDialog() {
    this.dialogRef.closeAll();
  }

}
