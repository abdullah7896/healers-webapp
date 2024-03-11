import { Component } from '@angular/core';

@Component({
  selector: 'app-vendorsignin',
  templateUrl: './vendorsignin.component.html',
  styleUrls: ['./vendorsignin.component.css']
})
export class VendorsigninComponent {
  forgetPasswordUi = false;

  toggleForgetPassword() {
    this.forgetPasswordUi = !this.forgetPasswordUi;
  }
  showOtpSectionvendor: boolean = false;
showForgetSectionvendor: boolean = true;

onSubmit() {
   this.showOtpSectionvendor = true;
  this.showForgetSectionvendor = false;
}
}
