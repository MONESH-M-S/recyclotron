import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../account/user.model';
import { Scrap } from '../scrap.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  getUserDetailById(id: string) {
    return this.http.get<{ user: User; message: string }>(
      `${this.BACKEND_URL}user/${id}`
    );
  }

  getScrapsByCreatorId(id: string) {
    return this.http.get<{ scraps: Scrap[]; message: string }>(
      `${this.BACKEND_URL}scrap/creator/${id}`
    );
  }

  addNewScrap(scrapForm: FormData) {
    return this.http.post<{ scrap: Scrap; message: string }>(
      `${this.BACKEND_URL}scrap/`,
      scrapForm
    );
  }

  deleteScrap(id: string) {
    return this.http.delete<{ scrap: any; message: string }>(
      `${this.BACKEND_URL}scrap/${id}`
    );
  }
}
