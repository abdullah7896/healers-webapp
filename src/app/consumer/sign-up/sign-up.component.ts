import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router) { }
  signup= false;

  toggleForgetPassword() {
    this.signup = !this.signup;
  }
  navigatetopreferences(){
    this.router.navigate(['/Preferences']);
  }
  navigatetosignin(){
    this.router.navigate(['/consumersignin']);
  }
  navigatetohome(){
    this.router.navigate(['']);
  }
}
