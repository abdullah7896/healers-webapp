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
  //confirmForgotPassword ={email:'',verificationCode:['', '', '', '', '', ''],password:''};
  confirmForgotPassword = { email: '', verificationCode: '', password: '' };
  userEmail = '';

  handleVerificationCodeChange(index: number, event: Event) {
    // Get the value of the changed input field
    const inputValue = (event.target as HTMLInputElement).value;

    // Update the corresponding index of the verificationCode array
    this.confirmForgotPassword.verificationCode += inputValue;
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
  Login() {
    const { email, password } = this.loginData;
    const loginData = { email, password };
    // Call the login API from apiService here
    this.apiService.login(loginData).subscribe(response => {
      // Handle successful login response here
      console.log('Login successful', response);
      // Redirect or perform other actions after successful login
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
