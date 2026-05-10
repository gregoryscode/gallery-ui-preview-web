import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent {

  constructor(
    public _dialogRef: MatDialogRef<WelcomeDialogComponent>) { }

  close() {
    this._dialogRef.close(false);
  }
}
