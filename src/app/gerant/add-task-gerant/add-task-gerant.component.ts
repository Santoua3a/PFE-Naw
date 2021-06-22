import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/_modals/task';
import { TaskServicesService } from 'src/app/_services/task-services.service';

@Component({
  selector: 'app-add-task-gerant',
  templateUrl: './add-task-gerant.component.html',
  styleUrls: ['./add-task-gerant.component.css']
})
export class AddTaskGerantComponent implements OnInit {
  form: any = {
    nom: null,
    dated: null,
    datef: null,
    etat:null
  };
  t:any

  isSuccessful = false;
  constructor(private taskService: TaskServicesService) { }

  ngOnInit(): void {
  }

  onSubmit(v:any){
      const {nom , dated, datef } = this.form;
      this.taskService.addTask(v).subscribe(res => {

      this.t = res
        console.log(this.t)

      }
       
        )
  }

}
