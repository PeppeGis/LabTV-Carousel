import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-reg',
  templateUrl: './modal-reg.component.html',
  styleUrls: ['./modal-reg.component.scss']
})
export class ModalRegComponent {

  constructor(private dialogRef: MatDialog, private route: Router) { }

  goToLogin = () => {
    this.dialogRef.closeAll();
    this.route.navigateByUrl('/login')
  }

}
