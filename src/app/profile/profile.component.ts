import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
email!:any
username!:any
prenom!:any
nom!:any
password!:any;
c:any;
form:any={
  old:null,
  new:null,
};
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.c = JSON.parse(localStorage.getItem('user') || "{}");
    this.username = window.sessionStorage.getItem("AuthUsername")
    this.email = window.sessionStorage.getItem("AuthEmail");
    console.log(this.email);
    this.prenom = window.sessionStorage.getItem("AuthPrenom");
    console.log(this.prenom)
    this.nom = window.sessionStorage.getItem("AuthNom");
    console.log(this.nom);
    this.password = window.sessionStorage.getItem('AuthPass');
    console.log(this.password);
  }

  


}
