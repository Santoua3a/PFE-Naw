import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-commerciale',
  templateUrl: './profile-commerciale.component.html',
  styleUrls: ['./profile-commerciale.component.css']
})
export class ProfileCommercialeComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

}
