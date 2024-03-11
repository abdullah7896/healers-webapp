import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.css']
})
export class VendorSignUpComponent {
  vendorsignup= false;

  toggleotpsection() {
    this.vendorsignup = !this.vendorsignup;
  }
}
