import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../_modals/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {
  url = 'http://localhost:8080/api/task/get-all-tasks';
  url2 = 'http://localhost:8080/api/task/create-task'
  constructor(private http :HttpClient) {

   }
   gettasks(){
     return this.http.get<Task[]>(this.url)
   }

   addTask(t : Task){
     return this.http.post<Task>(this.url2,t)
     
   }
}
