import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private createfeedUrl = 'http://localhost:8080/api/feedback/create-feedback'

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  registerUser(nom: string, prenom: string, email: string, username: string, password: string, roles:[]): Observable<string> {
    return this.http.post<string>(this.signupUrl, {
      nom,
      prenom,
      email,
      username,
      password,
      roles:['ROLE_CLIENT']
    }, httpOptions);
  }

  createFeed(msg: string): Observable<string>{
    return this.http.post<string>(this.createfeedUrl, {
      msg
    }, httpOptions);
  }

}
