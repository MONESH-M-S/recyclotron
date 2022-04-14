import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { LocalStorageService } from './account/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isTokenAvailable: boolean;

  constructor(
    private accountService: AccountService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    if (
      this.localStorageService.getToken() !== null &&
      this.localStorageService.getToken() !== undefined
    ) {
      this.isTokenAvailable = true;
      this.accountService.loginStatus.next(true);
    } else {
      this.isTokenAvailable = false;
      this.accountService.loginStatus.next(false);
    }
  }
}
