

import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board!: string;
  errorMessage!: string;
  username!: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('AuthUsername');
    console.log(this.username)
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

}
