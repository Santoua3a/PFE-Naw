import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_modals/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-commerciaux-list-admin',
  templateUrl: './commerciaux-list-admin.component.html',
  styleUrls: ['./commerciaux-list-admin.component.css']
})
export class CommerciauxListAdminComponent implements OnInit {
tab:User[]=[]
  constructor(private s : UserService) { }

  ngOnInit(): void {
    this.s.getcommerciaux().subscribe(
     res => this.tab = res 
    )
  }

}
