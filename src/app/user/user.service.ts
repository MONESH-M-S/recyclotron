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

  getAllScraps() {
    return this.http.get<{ scraps: Scrap[]; message: string }>(
      `${this.BACKEND_URL}scrap/`
    );
  }

  getUserDetailById(id: string) {
    return this.http.get<{ user: User; message: string }>(
      `${this.BACKEND_URL}user/${id}`
    );
  }

  getScrapDetailById(id: string) {
    return this.http.get<{ scrap: Scrap; message: string }>(
      `${this.BACKEND_URL}scrap/${id}`
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

  updateScrapFromUser(form: Scrap, id: string) {
    return this.http.put<{ scrap: Scrap; message: string }>(
      `${this.BACKEND_URL}scrap/${id}`,
      form
    );
  }

  updateLockConformation(id: string) {
    return this.http.put<{ scrap: any; message: string }>(
      `${this.BACKEND_URL}scrap/${id}/lock-status`,
      id
    );
  }

  deleteScrap(id: string) {
    return this.http.delete<{ scrap: any; message: string }>(
      `${this.BACKEND_URL}scrap/${id}`
    );
  }
}
