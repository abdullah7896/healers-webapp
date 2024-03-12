import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.css']
})
export class VendorSignUpComponent {
  constructor(private router: Router) { }
  vendorsignup= false;

  toggleotpsection() {
    this.vendorsignup = !this.vendorsignup;
  }
  navigatetosignin(){
    this.router.navigate(['/vendorsignin']);
  }
 

 
}
