import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_modals/user';
import { Feed } from '../_modals/feed';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/user';
  private pmUrl = 'http://localhost:8080/api/manager';
  private adminUrl = 'http://localhost:8080/api/user/create-user';
  private commercialUrl = 'http://localhost:8080/api/user/get-all-users'
  private deleteUrl = 'http://localhost:8080/api/user/delete-user/'
  private feedUrl = 'http://localhost:8080/api/feedback/get-all-feedbacks/'
  private deleteFeed = 'http://localhost:8080/api/feedback/delete-feedback/'
  private userbyidurl ='http://localhost:8080/api/user/get-user/'

  

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
  getcommerciaux(){
    return this.http.get<User[]>(this.commercialUrl)
  }
   getgerants(){
    return this.http.get<User[]>(this.commercialUrl)
  }

  getFeedbacks(){
    return this.http.get<Feed[]>(this.feedUrl)
  }

  addemployee(nom: string, prenom: string, email: string, username: string, password: string, role: string): Observable<string>{
    return this.http.post<string>(this.adminUrl,{
      nom,
      prenom,
      email,
      username,
      password,
      role
    }, httpOptions)
  }

deleteUser(id:number){
  return this.http.delete<User>(this.deleteUrl+id,httpOptions)
  
}

deleteFeedback(id:number){
  return this.http.delete<Feed>(this.deleteFeed+id,httpOptions)
}
getClientbyid(id:number){
  return this.http.get<User>(this.userbyidurl+id)
}

}
