import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { User } from '../_modals/user';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
    nom: null,
    prenom: null,
    email:null,
    roles:null
  };

  errorMessage = 'L"ajout d"un nouvel employé est échoué ! Veuillez réessayer une autre fois.';
  user = new User();
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit1(): void {
    const { nom, prenom, username, email, password, roles } = this.form;

    this.authService.registerUser(nom, prenom, email, username, password, roles).subscribe(
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
