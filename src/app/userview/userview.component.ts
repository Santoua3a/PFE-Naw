import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
client:any
  constructor(private a : ActivatedRoute,private s :UserService) { }

  ngOnInit(): void {
    const id = this.a.snapshot.params["id"]
    this.s.getClientbyid(id).subscribe(res =>
      this.client=res
      )

  }

}
