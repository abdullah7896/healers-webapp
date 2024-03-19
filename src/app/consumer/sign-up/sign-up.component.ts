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
  signUp={firstName:'',lastName:'',email:'',password:'',role:0};
  userEmail = '';
  signup= false;
  confirmSignUp = { email: '', verificationCode: '', password: '', };
  
  handleVerificationCodeChange(index: number, event: Event) {
    // Get the value of the changed input field
    const inputValue = (event.target as HTMLInputElement).value;

    // Update the corresponding index of the verificationCode array
    this.confirmSignUp.verificationCode += inputValue;
  }

  SignUp(){
    this.signup = !this.signup;
    this.apiService.SignUp(this.signUp).subscribe(response => {
      localStorage.setItem('userPasswordEmail', this.userEmail);
      console.log('SignUp successful', response);
    }, error => {
      // Handle login error here
      console.error('SignUp failed', error);
      // Display error message or take appropriate action
    });
  }
  ConfirmSignUp(){
    this.confirmSignUp.password= this.signUp.password
    this.confirmSignUp.email = this.signUp.email;
  this.apiService.ConfirmSignUp(this.confirmSignUp).subscribe(response => {
    console.log('Email send successful', response);
  }, error => {
    console.error('Email send failed', error);
  });
  }
  ResendSignUpOTP(){
  this.apiService.ResendSignUpOTP(this.signUp.email).subscribe(response =>{
    console.log('Resend OTP successful', response);
    //this.router.navigate(['/dashboard']); // Example redirect to dashboard
  },
    error => {
      console.error('Resend OTP failed', error);
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
