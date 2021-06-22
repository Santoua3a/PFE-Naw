import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { AuthLoginInfo } from '../_auth/login-info';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo!: AuthLoginInfo; 

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password
      );

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {

        if(data.email != null){

          console.log("yaaa");
          if(data.roles[0] == "ROLE_ADMIN"){
            this.router.navigate(['admin'])
            console.log("haha");
          }
          if(data.roles[0]== "ROLE_COMMERCIAL"){
            this.router.navigate(['commerciale']);
            console.log("haze");
          }
          if(data.roles[0]=="ROLE_CLIENT"){
            this.router.navigate(['client']);
          }
          if(data.roles[0]=="ROLE_MANAGER"){
            this.router.navigate(['gerant']);
          }


          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.email);


          this.tokenStorage.saveAuthorities(data.authorities);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.roles = this.tokenStorage.getAuthorities();
          //this.router.navigate(['admin']);

        }
        
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

