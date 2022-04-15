import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../account/user.model';

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
}
