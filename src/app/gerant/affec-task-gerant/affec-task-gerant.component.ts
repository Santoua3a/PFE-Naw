import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_auth/auth.service';
import { Task } from 'src/app/_modals/task';
import { User } from 'src/app/_modals/user';
import { TaskServicesService } from 'src/app/_services/task-services.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-affec-task-gerant',
  templateUrl: './affec-task-gerant.component.html',
  styleUrls: ['./affec-task-gerant.component.css']
})
export class AffecTaskGerantComponent implements OnInit {
  ff:any;
  v:any;
  tasks : Task[]=[]
  form: any = {
    commercial: null,
    task: null
  };
  username:any;
  idTask:any;
  idComm:any;
  constructor(private s : UserService, private l: TaskServicesService, private authService: AuthService) { }

  ngOnInit(): void {

    this.username = window.sessionStorage.getItem('AuthUsername');
    this.s.getgerants().subscribe(res =>{
      this.ff = res
      this.v= this.ff.filter((r:User) => r.role == "commercial")
    })
    this.l.gettasks().subscribe(res =>{
      this.tasks=res;
      console.log(this.tasks)
     })
  }
  getusername(a:any){
    console.log(a)
  }

  onSubmit(){
    let c = JSON.parse(localStorage.getItem('user') || "{}");
    let i = c.id;
    console.log(this.idTask);
    console.log(this.idComm);
    this.authService.affectTask(this.idTask, this.idComm, i).subscribe(
      data =>
      console.log(data)
    )

    // this.authService.affectTask(task, r, i, k).subscribe(data=>
    //   console.log(data)
    // );
  }

}
