import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router) { }
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
naviagtetosignup(){
  this.router.navigate(['/consumersignup']);
}
navigatetohome(){
  this.router.navigate(['']);
}




 
 
}
