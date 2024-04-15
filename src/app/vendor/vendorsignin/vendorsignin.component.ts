import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';




@Component({
  selector: 'app-vendorsignin',
  templateUrl: './vendorsignin.component.html',
  styleUrls: ['./vendorsignin.component.css'],

})
export class VendorsigninComponent {
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService,) { }
  forgetPasswordUi = false;
  loginData = { email: '', password: '' };
  confirmForgotPassword = { email: '', verificationCode: '', password: '', userType: 1 };
  userEmail = '';
  userType = 1;
  formSubmitted = false
  response = { status: true, message: '' }
  vendorsigninotp = false
  confirmSignUp = { email: '', verificationCode: '', password: '', userType: 1 };
  showEmptyEmail = false

  // handleVerificationCodeChange(index: number, event: Event) {
    // const inputValue = (event.target as HTMLInputElement).value;
    // this.confirmForgotPassword.verificationCode = this.confirmForgotPassword.verificationCode.substring(0, index) + inputValue + this.confirmForgotPassword.verificationCode.substring(index + 1);
  // }
  // handleVerificationCodeChange(event: Event) {
    // const inputValue = (event.target as HTMLInputElement).value;
    // this.confirmForgotPassword.verificationCode += inputValue;
  // this.confirmForgotPassword.verificationCode = String(this.confirmForgotPassword.verificationCode);
  // }
  handleVerificationCodeChange(inputValue: string) {
    this.confirmForgotPassword.verificationCode = inputValue;
  }

  handlevendorSigninOtpChange(index: number, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.confirmSignUp.verificationCode = this.confirmSignUp.verificationCode.substring(0, index) + inputValue + this.confirmSignUp.verificationCode.substring(index + 1);
  }

  toggleForgetPassword() {
   if (!this.forgetPasswordUi) {
      this.showForgetSectionvendor = true;
      this.forgetPasswordUi = true;
    } else {
      this.showForgetSectionvendor = false;
      this.forgetPasswordUi = false;
    }
   
   
  }
  showOtpSectionvendor: boolean = false;
  showForgetSectionvendor: boolean = false;

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

      this.showForgetSectionvendor = false;
      this.showOtpSectionvendor = true;
      localStorage.setItem('userPasswordEmail', this.userEmail);
      console.log('Email Send successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        if (error.status == 400) {
          this.showEmptyEmail = !this.showEmptyEmail
        }
        console.error('Email Send failed', error);
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
      console.log('Change Password successful', response);
     }, error => {
      console.error('Change Password failed', error);
      // Display error message or take appropriate action
    }).add(() => {

      this.isloading = false;
    });
  }
  ResendForgotPasswordOTP() {
    var resendForgotPasswordOtpemail = localStorage.getItem('userPasswordEmail')
    this.apiService.ResendForgotPasswordOTP(resendForgotPasswordOtpemail).subscribe(response => {
      console.log('Login successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Login failed', error);
      });
  }
   
  onSubmit() {
    this.isloading = true;
    setTimeout(() => {
      const { email, password } = this.loginData;
      const loginData = { email, password, userType: 1 };
    // const { email, password } = this.loginData;
    // const loginData = { email, password, userType: 1 };
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
      const { status, message, errorCode } = response;
      if (!status) {
        console.log('errorCode', errorCode)
        if (errorCode == 'UserNotConfirmed') {
          this.vendorsigninotp = true;
          this.forgetPasswordUi = true
        }

        this.response = { status, message };
        console.log('this.loginData', this.loginData)
        return;
      }
      console.log('Login successful', response);
      this.router.navigate(['/VendorLoginLandingPage']);
    }, error => {
      this.isloading = false;
      console.error('Login failed', error);
    });
  },2000);
  }
  // onSubmit() {
  //    this.showOtpSectionvendor = true;
  //   this.showForgetSectionvendor = false;
  // }
  navigatetosignup() {
    this.router.navigate(['/Vendorsignup']);
  }

  navigatetosignin() {
    this.router.navigate(['/vendorsignin']);
  }
  navigatetohome() {
    this.router.navigate(['']);
  }

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

  ResendSignUpOTP() {
    this.apiService.ResendSignUpOTP(this.loginData.email).subscribe(response => {
      console.log('Login successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Login failed', error);
      });
  }

  ConfirmSignUp() {
    const { email, password } = this.loginData;
    this.confirmSignUp.email = email;
    this.confirmSignUp.password = password;
    this.apiService.ConfirmSignUp(this.confirmSignUp).subscribe(response => {
      if (!response.status) return;
      console.log(' successful', response);
    }, error => {
      console.error(' failed', error);
    });
  }
  navigatetoprofiledetailing() {
    this.router.navigate(['/ProfileDetailing']);
  }
  navigatetovendors() {
    this.router.navigate(['/vendors']);
  }

  refreshPage() {
    window.location.reload();
  }
  isloading = false;
  toggleloading() {
    this.isloading = true;
  }

  checkboxEnabled = false;
  enableCheckbox() {
    this.checkboxEnabled = true;
  }

  
  click(){
  this.forgetPasswordUi= !this.forgetPasswordUi
  
  }
  
  
  
  
  
  
  
  
}
