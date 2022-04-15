import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DeleteDialogComponent } from 'src/app/helper/delete-dialog/delete-dialog.component';
import { LockConformationDialogComponent } from 'src/app/helper/lock-conformation-dialog/lock-conformation-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-view-scrap',
  templateUrl: './admin-view-scrap.component.html',
  styleUrls: ['./admin-view-scrap.component.scss'],
})
export class AdminViewScrapComponent implements OnInit {
  enteredScraps = [];
  isScrapAvailable = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userService.getAllScraps().subscribe((res) => {
      if (res.scraps.length > 0) {
        for (let scraps of res.scraps) {
          if (scraps.isLocked === false) {
            this.enteredScraps.push(scraps);
          }
        }
      }
      if (this.enteredScraps.length > 0) {
        this.isScrapAvailable = true;
      }
    });
  }

  viewScrap(id: string) {
    this.router.navigate([`s/${id}`]);
  }

  openLockScrapConformationDialog(id: string) {
    let dialogRef = this.dialog.open(LockConformationDialogComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (res == 'lock') {
        this.userService.updateLockConformation(id).subscribe((res) => {
          if (res.scrap._id) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: res.message,
            });
            this.enteredScraps = [];
            this.isScrapAvailable = false;
            this.userService.getAllScraps().subscribe((res) => {
              if (res.scraps.length) {
                for (let scraps of res.scraps) {
                  if (scraps.isLocked === false) {
                    this.enteredScraps.push(scraps);
                  }
                }
                if (this.enteredScraps.length > 0) {
                  this.isScrapAvailable = true;
                }
              }
            });
          }
        });
      }
    });
  }

  openDeleteDialog(id: string) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'yes') {
        this.userService.deleteScrap(id).subscribe((res) => {
          if (res.scrap._id) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: res.message,
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: res.message,
            });
          }
          this.userService.getAllScraps().subscribe((res) => {
            this.enteredScraps = [];
            this.isScrapAvailable = false;
            if (res.scraps.length > 0) {
              for (let scraps of res.scraps) {
                if (scraps.isLocked === false) {
                  this.enteredScraps.push(scraps);
                }
              }
              if (this.enteredScraps.length > 0) {
                this.isScrapAvailable = true;
              }
            }
          });
        });
      }
    });
  }
}
