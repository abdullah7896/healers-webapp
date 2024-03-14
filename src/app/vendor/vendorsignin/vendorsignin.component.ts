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
  confirmForgotPassword = { email: '', verificationCode: '123456', password: '' };
  userEmail = '';

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
    console.log('Login successful', response);
    this.router.navigate(['/dashboard']); // Example redirect to dashboard
  },
    error => {
      console.error('Login failed', error);
    });
}

ConfirmForgotPassword() {
  var storedemail = localStorage.getItem('userPasswordEmail')
  if (storedemail)
    this.confirmForgotPassword.email = storedemail;
  // const { verificationCode, password } = this.confirmForgotPassword;
  // const confirmForgotPassword = { email:storedemail, verificationCode,password };
  this.apiService.ConfirmForgotPassword(this.confirmForgotPassword).subscribe(response => {
    console.log('Login successful', response);
  }, error => {
    // Handle login error here
    console.error('Login failed', error);
    // Display error message or take appropriate action
  });
}

onSubmit() {
  const { email, password } = this.loginData;
  const loginData = { email, password };
   
  // Call the login API from apiService here
  this.apiService.login(loginData).subscribe(response => {
    // Handle successful login response here
    console.log('Login successful', response);
    // Redirect or perform other actions after successful login
    this.router.navigate(['/dashboard']); // Example redirect to dashboard
  }, error => {
    // Handle login error here
    console.error('Login failed', error);
    // Display error message or take appropriate action
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
