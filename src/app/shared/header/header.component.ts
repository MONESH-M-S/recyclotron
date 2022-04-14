import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visibleSidebar: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  onRoute(path: string) {
    this.onNavButtonClick();
    this.router.navigate([path]);
  }

  onNavButtonClick() {
    this.visibleSidebar = false;
  }

  openLoginDialog() {
    this.onNavButtonClick();
    // let dialogRef = this.dialog.open(LoginComponent, {
    //   width: '400px',
    //   hasBackdrop: true,
    //   disableClose: true,
    // });

    // dialogRef.afterClosed().subscribe((result) => {});
  }
}
