import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_modals/user-model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-employe-list-admin',
  templateUrl: './employe-list-admin.component.html',
  styleUrls: ['./employe-list-admin.component.css']
})
export class EmployeListAdminComponent implements OnInit {
ff:any
v :any
m:any
user!:User
value=""
username:any;

  constructor(private s :UserService,private r : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
    this.s.getgerants().subscribe(res =>{
      this.ff = res
      
      this.v= this.ff.filter((r:User) => r.role == "manager")
      this.m = this.v
    })
  }
  findmanager(){
  this.m = this.v.filter((r:User) => this.value.indexOf(r.nom)!= -1 )
  }
  
  onDelete(id:number){
    this.s.deleteUser(id).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }
  

}
