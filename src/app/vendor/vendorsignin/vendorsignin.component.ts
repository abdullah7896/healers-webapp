import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorsignin',
  templateUrl: './vendorsignin.component.html',
  styleUrls: ['./vendorsignin.component.css']
})
export class VendorsigninComponent {
  constructor(private router: Router) { }
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
navigatetosignup(){
  this.router.navigate(['/Vendorsignup']);
}

navigatetosignin(){
  this.router.navigate(['/vendorsignin']);
}
navigatetohome(){
  this.router.navigate(['']);
}



}
