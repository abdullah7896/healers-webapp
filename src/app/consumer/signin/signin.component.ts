import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService) { }
  forgetPasswordVisible = false;
  loginData = { email: '', password: '' };
  confirmForgotPassword = { email: '', verificationCode: '', password: '' };
  userEmail = '';

  
  handleVerificationCodeChange(index: number, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.confirmForgotPassword.verificationCode = this.confirmForgotPassword.verificationCode.substring(0, index) + inputValue + this.confirmForgotPassword.verificationCode.substring(index + 1);
}

  toggleForgetPassword() {
    this.forgetPasswordVisible = !this.forgetPasswordVisible;
  }

  showOtpSection: boolean = false;
  showForgetSection: boolean = true;

  ForgotPassword() {
    this.apiService.ForgotPassword(this.userEmail).subscribe(response => {
      if (response.status) {
        this.forgetPasswordVisible = false;
        this.showOtpSection = true;
      }
      
      localStorage.setItem('userPasswordEmail', this.userEmail);
      console.log('Email send  successfully', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Email send failed', error);
      });
  }

  ConfirmForgotPassword() {
    var storedemail = localStorage.getItem('userPasswordEmail')
    if (storedemail)
      this.confirmForgotPassword.email = storedemail;
    this.apiService.ConfirmForgotPassword(this.confirmForgotPassword).subscribe(response => {
      console.log('Change Password successfully', response);
    }, error => {
      // Handle login error here
      console.error('Change Password failed', error);
    });
  }
  ResendForgotPasswordOTP(){
    var resendForgotPasswordOtpemail = localStorage.getItem('userPasswordEmail')
    this.apiService.ResendForgotPasswordOTP(resendForgotPasswordOtpemail).subscribe(response =>{
      console.log('Resend OTP successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Resend OTP failed', error);
      });
  }
  Login() {
    const { email, password } = this.loginData;
    const loginData = { email, password };
    this.apiService.login(loginData).subscribe(response => {
      console.log('Login successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    }, error => {
      // Handle login error here
      console.error('Login failed', error);
      // Display error message or take appropriate action
    });
  }
  onSubmit() {
    this.showOtpSection = true;
    this.showForgetSection = false;
  }
  naviagtetosignup() {
    this.router.navigate(['/consumersignup']);
  }
navigatetohome(){
  this.router.navigate(['']);
}






}
