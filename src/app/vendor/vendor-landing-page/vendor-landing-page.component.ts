import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendor-landing-page',
  templateUrl: './vendor-landing-page.component.html',
  styleUrls: ['./vendor-landing-page.component.css']
})
export class VendorLandingPageComponent {
  constructor(private router: Router) { }
  navigateTosignin(){
    this.router.navigate(['/vendorsignin']); 
  }
  navigateTovendorsignup(){
    this.router.navigate(['/Vendorsignup']); 
  }
}
