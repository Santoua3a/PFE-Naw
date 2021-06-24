import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/_modals/task';
import { TaskServicesService } from 'src/app/_services/task-services.service';

@Component({
  selector: 'app-tasks-commerciale',
  templateUrl: './tasks-commerciale.component.html',
  styleUrls: ['./tasks-commerciale.component.css']
})
export class TasksCommercialeComponent implements OnInit {
  username:any;
  etat=[ "En cours" , "Terminée" ];
  v:Task[]=[];
  b:Task[]=[]
  selectedEtat!:"";
  etatForm !: FormGroup;
  etats = [
  "terminée","en cours"
  ];
  val=""
  constructor(private t:TaskServicesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.username = window.sessionStorage.getItem('AuthUsername');
    this.t.gettasks().subscribe(res =>{
      let c = JSON.parse(localStorage.getItem('user') || "{}");
    let i = c.id
    console.log(i)
      this.v = res
      this.b = this.v.filter((rest :any) => rest.commercial.id == i )
      console.log(this.b)

      // this.etatForm = this.fb.group({
      //   etat: [""]
      // });


      this.etatForm = new FormGroup({
        etat: new FormControl('')
      })
    
    }
    

      )

  }

  onSubmit(id:any) {
    console.log(this.val)
    this.t.updateTask(id,this.val).subscribe(res =>
      console.log(res)
      )
  }


  
}
