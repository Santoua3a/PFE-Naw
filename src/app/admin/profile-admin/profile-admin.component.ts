import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

}
