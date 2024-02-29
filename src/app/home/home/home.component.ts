import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  navigatetootherpage(){
    this.router.navigate(['/vendors']);
  }
  //   navigatetootherpage() {
//     const navigationExtras: NavigationExtras = {
//       fragment: 'section1'
//     };
  
//     this.router.navigate(['/vendors'], navigationExtras);
 
//   }
}
