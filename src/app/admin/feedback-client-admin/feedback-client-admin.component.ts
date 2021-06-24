import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-feedback-client-admin',
  templateUrl: './feedback-client-admin.component.html',
  styleUrls: ['./feedback-client-admin.component.css']
})
export class FeedbackClientAdminComponent implements OnInit {
  username:any;
  feeds:any;
  constructor(private s: UserService) { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
    this.s.getFeedbacks().subscribe(res=>
      this.feeds=res)
  }

  onDelete(id:number){
    this.s.deleteFeedback(id).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }

}
