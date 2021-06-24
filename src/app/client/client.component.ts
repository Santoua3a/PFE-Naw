import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

}
