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
    etat:"En Cours"
  };
  t:any
  username:any;
  isSuccessful = false;
  constructor(private taskService: TaskServicesService) { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

  onSubmit(v:any){
      const {nom , dated, datef, etat } = this.form;
      this.taskService.addTask(nom, dated, datef, etat).subscribe(data => {
        console.log(data)
      })
  }

}
