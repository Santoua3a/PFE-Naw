import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commerciale',
  templateUrl: './commerciale.component.html',
  styleUrls: ['./commerciale.component.css']
})
export class CommercialeComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

}
