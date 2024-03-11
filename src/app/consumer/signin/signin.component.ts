import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  forgetPasswordVisible = false;

toggleForgetPassword() {
  this.forgetPasswordVisible = !this.forgetPasswordVisible;
}

showOtpSection: boolean = false;
showForgetSection: boolean = true;

onSubmit() {
   this.showOtpSection = true;
  this.showForgetSection = false;
}

 
 
}
