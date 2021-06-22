
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/_modals/task';
import { TaskServicesService } from 'src/app/_services/task-services.service';

@Component({
  selector: 'app-task-list-gerant',
  templateUrl: './task-list-gerant.component.html',
  styleUrls: ['./task-list-gerant.component.css']
})
export class TaskListGerantComponent implements OnInit {
  tasks : Task[]=[]
  constructor(private s :TaskServicesService) { }

  ngOnInit(): void {
    this.s.gettasks().subscribe(res =>{
     this.tasks=res;
     console.log(this.tasks)
    }
      
      )
  }

}
