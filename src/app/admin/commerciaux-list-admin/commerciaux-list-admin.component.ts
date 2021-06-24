import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_modals/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-commerciaux-list-admin',
  templateUrl: './commerciaux-list-admin.component.html',
  styleUrls: ['./commerciaux-list-admin.component.css']
})
export class CommerciauxListAdminComponent implements OnInit {
  ff:any
  v :any
  user!:User
  username:any;
  constructor(private s : UserService) { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
    this.s.getgerants().subscribe(res =>{
      this.ff = res
      this.v= this.ff.filter((r:User) => r.role == "commercial")
    })

}

onDelete(id:number){
  this.s.deleteUser(id).subscribe(res => {
    console.log(res)
    this.ngOnInit()
  })
}

}
