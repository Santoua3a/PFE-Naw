import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../_modals/task';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {
  url = 'http://localhost:8080/api/task/get-all-tasks';
  url2 = 'http://localhost:8080/api/task/create-task'
  url3 = 'http://localhost:8080/api/task/update-etatTask/'
  constructor(private http :HttpClient) {

   }
   gettasks(){
     return this.http.get<Task[]>(this.url)
   }

   addTask(nom: string, dated: Date, datef: Date, etat: string): Observable<String>{
     return this.http.post<String>(this.url2,{
       nom, 
       dated,
       datef,
       etat
     }, httpOptions)
     
   }

   updateTask(id: number, c:string){
     return this.http.put<Task>(this.url3+id,{
       c
     }, httpOptions)
   }
}
