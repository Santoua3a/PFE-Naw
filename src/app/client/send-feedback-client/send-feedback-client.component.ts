import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/auth.service';
import { Feed } from 'src/app/_modals/feed';
import { User } from 'src/app/_modals/user';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-send-feedback-client',
  templateUrl: './send-feedback-client.component.html',
  styleUrls: ['./send-feedback-client.component.css']
})
export class SendFeedbackClientComponent implements OnInit {

  form:any={
    msg: null
  }

  errorMessage = "L envoie du feedback à été échoué ! Vueillez réessayez une autre fois."
  isSuccessful= false;
  isSendFailed=false;
  feed = new Feed();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const msg = this.form; 

    this.authService.createFeed(msg).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful=true;
        this.isSendFailed=false;
        this.reloadPage();
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
