import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/user';
  private pmUrl = 'http://localhost:8080/api/manager';
  private adminUrl = 'http://localhost:8080/api/admin';
  private commercialUrl = 'http://localhost:8080/api/commercial'

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getManagerBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getCommercialBoard() : Observable<string>{
    return this.http.get(this.commercialUrl, {responseType: 'text'});
  }
}
