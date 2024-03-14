import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService) { }
  consumerSignUp={firstName:'',lastName:'',email:'',password:'',role:0};
  consumerEmail = '';
  signup= false;
  ConsumerSignUp(){
    this.apiService.ConsumerSignUp(this.consumerSignUp).subscribe(response => {
      localStorage.setItem('userPasswordEmail', this.consumerEmail);
      console.log('Login successful', response);
    }, error => {
      // Handle login error here
      console.error('Login failed', error);
      // Display error message or take appropriate action
    });
  }

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
