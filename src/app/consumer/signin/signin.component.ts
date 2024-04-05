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
  confirmForgotPassword = { email: '', verificationCode: '', password: '', userType: 0 };
  userEmail = '';
  userType = 0;
  formSubmitted = false
  response = { status: true, message: '' }
  showEmptyEmail = false

  // handleVerificationCodeChange(index: number, event: Event) {
  // const inputValue = (event.target as HTMLInputElement).value;
  // // this.confirmForgotPassword.verificationCode = this.confirmForgotPassword.verificationCode.substring(0, index) + inputValue + this.confirmForgotPassword.verificationCode.substring(index + 1);
  // }
  // handleVerificationCodeChange(event: Event) {
    // const inputValue = (event.target as HTMLInputElement).value;
    // this.confirmForgotPassword.verificationCode += inputValue;
    //  this.confirmForgotPassword.verificationCode = String(this.confirmForgotPassword.verificationCode);
  // }
  handleVerificationCodeChange(inputValue: string) {
    this.confirmForgotPassword.verificationCode = inputValue;
  }
 toggleForgetPassword() {
    this.forgetPasswordVisible = !this.forgetPasswordVisible;
    this.showForgetSection = !this.showForgetSection;
  }

  showOtpSection: boolean = false;
  showForgetSection: boolean = false;

  isValidated(response: any) {
    console.log('response.status', response.status);
    if (response.status) return true;
    alert(response.message);

    return false;
  }

  ForgotPassword() {
    this.isloading = true;
    this.apiService.ForgotPassword(this.userEmail, this.userType).subscribe(response => {
      const isValidatedResponse = this.isValidated(response);
      console.log('isValidatedResponse', isValidatedResponse);
      if (!isValidatedResponse) return;

      this.showForgetSection = false;
      this.showOtpSection = true;
      localStorage.setItem('userPasswordEmail', this.userEmail);
      console.log('Email send  successfully', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        if (error.status == 400) {
          this.showEmptyEmail = !this.showEmptyEmail
        }
        console.error('Email send failed', error);
      }).add(() => {

        this.isloading = false;
      });
  }

  ConfirmForgotPassword() {
    this.isloading = true;
    var storedemail = localStorage.getItem('userPasswordEmail')
    if (storedemail)
      this.confirmForgotPassword.email = storedemail;
    this.apiService.ConfirmForgotPassword(this.confirmForgotPassword).subscribe(response => {
      console.log('Change Password successfully', response);
    }, error => {
      // Handle login error here
      console.error('Change Password failed', error);
    }).add(() => {

      this.isloading = false;
    });
  }
  ResendForgotPasswordOTP() {
    var resendForgotPasswordOtpemail = localStorage.getItem('userPasswordEmail')
    this.apiService.ResendForgotPasswordOTP(resendForgotPasswordOtpemail).subscribe(response => {
      console.log('Resend OTP successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Resend OTP failed', error);
      });
  }
  Login() {
    this.isloading = true;
    setTimeout(() => {
      const { email, password } = this.loginData;
      const loginData = { email, password, userType: 0 };
      // const { email, password } = this.loginData;
      // const loginData = { email, password, userType: 0 };
      // Validate Fields
      this.formSubmitted = true
      if (!this.loginData.email || !this.loginData.password) {
        console.error('Email and password are required.');
        this.isloading = false;
        return;
      }

      this.apiService.login(loginData).subscribe(response => {
        // Validate API Status
        this.isloading = false;
        if(response.status){
          if(response.result)
          {
            localStorage.setItem('userData',JSON.stringify(response.result[0]))
          }
        }
        const { status, message } = response;
        if (!status) {
          this.response = { status, message };
          return;
        }

        console.log('Login successful', response);
        //this.router.navigate(['/dashboard']); // Example redirect to dashboard
      }, error => {
        // Handle login error here
        this.isloading = false;
        console.error('Login failed', error);

        // Display error message or take appropriate action
      });
    }, 2000);
  }
  onSubmit() {
    this.showOtpSection = true;
    this.showForgetSection = false;
  }
  naviagtetosignup() {
    this.router.navigate(['/consumersignup']);
  }
  navigatetohome() {
    this.router.navigate(['']);
  }

  // 
  checkboxChecked = {
    characters: false,
    uppercase: false,
    numeric: false,
    special: false
  };
  checkPasswordStrength() {
    const password = this.confirmForgotPassword.password;
    // Reset all checkboxes
    this.checkboxChecked = {
      characters: false,
      uppercase: false,
      numeric: false,
      special: false
    };

    // Check each password requirement
    if (password.length >= 8) {
      this.checkboxChecked.characters = true;
    }
    if (/[A-Z]/.test(password)) {
      this.checkboxChecked.uppercase = true;
    }
    if (/\d/.test(password)) {
      this.checkboxChecked.numeric = true;
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
      this.checkboxChecked.special = true;
    }

  }

  isloading = false;
  toggleloading() {
    this.isloading = true;
  }
  // 




































}
