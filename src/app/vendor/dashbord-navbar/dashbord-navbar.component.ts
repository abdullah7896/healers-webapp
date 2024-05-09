import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-navbar',
  templateUrl: './dashbord-navbar.component.html',
  styleUrls: ['./dashbord-navbar.component.css']
})
export class DashbordNavbarComponent {
constructor(private router:Router){}
navigatetohome(){
  this.router.navigate(['']);
}
}
