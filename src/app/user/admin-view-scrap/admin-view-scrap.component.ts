import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DeleteDialogComponent } from 'src/app/helper/delete-dialog/delete-dialog.component';
import { LockConformationDialogComponent } from 'src/app/helper/lock-conformation-dialog/lock-conformation-dialog.component';
import { Scrap } from 'src/app/scrap.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-view-scrap',
  templateUrl: './admin-view-scrap.component.html',
  styleUrls: ['./admin-view-scrap.component.scss'],
})
export class AdminViewScrapComponent implements OnInit {
  scrapId: string;
  scrapDetail: Scrap;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['sid']) {
        this.userService.getScrapDetailById(params['sid']).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
}
