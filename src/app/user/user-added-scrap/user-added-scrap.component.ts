import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DeleteDialogComponent } from 'src/app/helper/delete-dialog/delete-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-added-scrap',
  templateUrl: './user-added-scrap.component.html',
  styleUrls: ['./user-added-scrap.component.scss'],
})
export class UserAddedScrapComponent implements OnInit {
  id: string;
  userAddedScraps = [];
  isScrapAvailable = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
      }
    });
    this.userService.getScrapsByCreatorId(this.id).subscribe((res) => {
      if (res.scraps.length > 0) {
        this.isScrapAvailable = true;
        this.userAddedScraps = res.scraps;
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
          this.userService.getScrapsByCreatorId(this.id).subscribe((res) => {
            if (res.scraps.length > 0) {
              this.isScrapAvailable = true;
              this.userAddedScraps = res.scraps;
            } else {
              this.isScrapAvailable = false;
            }
          });
        });
      }
    });
  }
}
