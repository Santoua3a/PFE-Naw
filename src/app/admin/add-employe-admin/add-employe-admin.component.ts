import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/auth.service';
import { SignUpInfo } from 'src/app/_auth/signup-info';
import { User } from 'src/app/_modals/user';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-employe-admin',
  templateUrl: './add-employe-admin.component.html',
  styleUrls: ['./add-employe-admin.component.css']
})
export class AddEmployeAdminComponent implements OnInit {

  form: any = {};
  signupInfo?: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  user = new User();
  isSuccessful = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit1(): void {
    const { nom, prenom, username, email, password, roles } = this.form;

    this.authService.registerUser(nom, prenom, username, email, password, roles).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
