import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    window.sessionStorage.clear();
    this.router.navigate(['']);
  }

}
