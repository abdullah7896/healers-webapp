import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';

@Component({
  selector: 'app-vendorsignin',
  templateUrl: './vendorsignin.component.html',
  styleUrls: ['./vendorsignin.component.css']
})
export class VendorsigninComponent {
  constructor(private router: Router,private httpClient: HttpClient,private apiService: apiService) { }
  forgetPasswordUi = false;
  loginData = { email: '', password: '' };
  confirmForgotPassword = { email: '', verificationCode: '', password: '' };
  userEmail = '';

  handleVerificationCodeChange(index: number, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.confirmForgotPassword.verificationCode = this.confirmForgotPassword.verificationCode.substring(0, index) + inputValue + this.confirmForgotPassword.verificationCode.substring(index + 1);
}


  

  toggleForgetPassword() {
    this.forgetPasswordUi = !this.forgetPasswordUi;
  }
  showOtpSectionvendor: boolean = false;
showForgetSectionvendor: boolean = true;

ForgotPassword() {
  this.apiService.ForgotPassword(this.userEmail).subscribe(response => {
    if (response.status) {
      this.forgetPasswordUi = false;
      this.showOtpSectionvendor = true;
    }
    localStorage.setItem('userPasswordEmail', this.userEmail);
    console.log('Email Send successful', response);
    //this.router.navigate(['/dashboard']); // Example redirect to dashboard
  },
    error => {
      console.error('Email Send failed', error);
    });
}

ConfirmForgotPassword() {
  var storedemail = localStorage.getItem('userPasswordEmail')
  if (storedemail)
    this.confirmForgotPassword.email = storedemail;
  this.apiService.ConfirmForgotPassword(this.confirmForgotPassword).subscribe(response => {
    console.log('Change Password successful', response);
  }, error => {
    console.error('Change Password failed', error);
    // Display error message or take appropriate action
  });
}
ResendForgotPasswordOTP(){
  var resendForgotPasswordOtpemail = localStorage.getItem('userPasswordEmail')
  this.apiService.ResendForgotPasswordOTP(resendForgotPasswordOtpemail).subscribe(response =>{
    console.log('Login successful', response);
    //this.router.navigate(['/dashboard']); // Example redirect to dashboard
  },
    error => {
      console.error('Login failed', error);
    });
}

onSubmit() {
  const { email, password } = this.loginData;
  const loginData = { email, password };
   
  this.apiService.login(loginData).subscribe(response => {
    console.log('Login successful', response);
    //this.router.navigate(['/dashboard']); // Example redirect to dashboard
  }, error => {
    console.error('Login failed', error);
  });
}
// onSubmit() {
//    this.showOtpSectionvendor = true;
//   this.showForgetSectionvendor = false;
// }
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
