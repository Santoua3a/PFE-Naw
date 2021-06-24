import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affec-task-admin',
  templateUrl: './affec-task-admin.component.html',
  styleUrls: ['./affec-task-admin.component.css']
})
export class AffecTaskAdminComponent implements OnInit {
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
  }

}
