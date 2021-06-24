import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { FeedInfo } from './feed-info';
import { User } from '../_modals/user';
import { Feed } from '../_modals/feed';
import { Task } from '../_modals/task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private createfeedUrl = 'http://localhost:8080/api/feedback/create-feedback';
  private affectUrl="http://localhost:8080/api/task/affect-task/"
  private updPassUrl = 'http://localhost:8080/api/user/update-password/'

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  registerUser(nom: string, prenom: string, email: string, username: string, password: string, role:string, roles:[]): Observable<string> {
    return this.http.post<string>(this.signupUrl, {
      nom,
      prenom,
      email,
      username,
      password,
      role:"client",
      roles:['ROLE_CLIENT']
    }, httpOptions);
  }

  createFeed(msg:string, id:number){

     let obj = { "msg": msg , "client" : { "id" : id}}

    return this.http.post<Feed>(this.createfeedUrl, obj, httpOptions);}

    
    
    
    affectTask( id1:number, id2:number, idT:number){
  
      let obj = { "id":id1, "commercial":{"id":id2}, "gerant":{"id":idT} }
      return this.http.put<Task>(this.affectUrl+id1, obj, httpOptions);
    }


    updatePassword(id:number, pw:string){
      return this.http.put<User>(this.updPassUrl+id,pw,httpOptions)
    }
}


