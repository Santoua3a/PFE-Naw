import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/auth.service';
import { FeedInfo } from 'src/app/_auth/feed-info';
import { Feed } from 'src/app/_modals/feed';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-send-feedback-client',
  templateUrl: './send-feedback-client.component.html',
  styleUrls: ['./send-feedback-client.component.css']
})
export class SendFeedbackClientComponent implements OnInit {
  username:any;
  form:any={}

  errorMessage = "L envoie du feedback à été échoué ! Vueillez réessayez une autre fois."
  isSuccessful= false;
  isSendFailed=false;
  feed = new Feed();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

  onSubmit(): void {
    let fr:string=this.form.msg;
    let c = JSON.parse(localStorage.getItem('user') || "{}");
    let i = c.id;
    
    console.log("type of data")
    console.log(typeof(fr));
    console.log(fr);
    console.log(typeof(i));
    console.log(i);

    // let feed={
    //   msg:this.form.msg.toString(),
    //   nom:this.username
    // }
    this.authService.createFeed(fr, i).subscribe(
      data=>{
        console.log(data);
        console.log(this.username)
        this.isSuccessful=true;
        this.isSendFailed=false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSendFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
