import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/account/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
