import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-cl',
  templateUrl: './profile-cl.component.html',
  styleUrls: ['./profile-cl.component.css']
})
export class ProfileClComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

}
