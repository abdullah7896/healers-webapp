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
  signUp = { firstName: '', lastName: '', email: '', password: '', role: 0 };
  userEmail = '';
  signup = false;
  confirmSignUp = { email: '', verificationCode: '', password: '', userType: 0 };
  showEmailAlreadyExists = false
  showEmptyEmail = false
  showEmptyPassword = false

  handleVerificationCodeChange(index: number, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.confirmSignUp.verificationCode = this.confirmSignUp.verificationCode.substring(0, index) + inputValue + this.confirmSignUp.verificationCode.substring(index + 1);
  }

  isValidated(response: any): boolean {
    if (response.status) return true;

    if (this.signUp.email == '') {
      this.showEmptyEmail = !this.showEmptyEmail;
      if (this.showEmailAlreadyExists == true) this.showEmailAlreadyExists = !this.showEmailAlreadyExists;
    }
    else if (response.errorCode == 'Status406NotAcceptable') {
      this.showEmailAlreadyExists = !this.showEmailAlreadyExists;
      if (this.showEmptyEmail == true) this.showEmptyEmail = !this.showEmptyEmail;
    }

    if (this.signUp.password == '') this.showEmptyPassword = !this.showEmptyPassword;

    else {
      alert(response.message)
    }

    return false;
  }

  SignUp() {
    this.apiService.SignUp(this.signUp).subscribe(response => {
      const isValidatedResponse = this.isValidated(response)
      console.log('isValidatedResponse', isValidatedResponse)
      if (!isValidatedResponse) return;

      if (response.status) {
        this.signup = !this.signup;
        localStorage.setItem('userPasswordEmail', this.userEmail);
        console.log('SignUp successful', response);
      }
      else {
        alert(response.message)
      }
    }, error => {
      // Handle login error here
      if (error.status == 400) {
        this.showEmptyEmail = !this.showEmptyEmail
      }
      console.error('SignUp failed', error);
      // Display error message or take appropriate action
    });
  }
  ConfirmSignUp() {
    this.confirmSignUp.password = this.signUp.password
    this.confirmSignUp.email = this.signUp.email;
    this.apiService.ConfirmSignUp(this.confirmSignUp).subscribe(response => {
      console.log('Email send successful', response);
      if (response.status) {
        this.router.navigate(['/Preferences']);
      }
      else {
        alert(response.message)
      }
    }, error => {
      console.error('Email send failed', error);
    });
  }
  ResendSignUpOTP() {
    this.apiService.ResendSignUpOTP(this.signUp.email).subscribe(response => {
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
  // navigatetopreferences(){
  // this.router.navigate(['/Preferences']);
  // }
  navigatetosignin() {
    this.router.navigate(['/consumersignin']);
  }
  navigatetohome() {
    this.router.navigate(['']);
  }

  refreshPage() {
    window.location.reload();
  }
}
