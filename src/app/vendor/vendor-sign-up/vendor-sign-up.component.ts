import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vendor-sign-up',
  templateUrl: './vendor-sign-up.component.html',
  styleUrls: ['./vendor-sign-up.component.css']
})
export class VendorSignUpComponent implements OnInit {
  public categories: any[] = [];
  public selectedCategoryIds: any[] = [];
  fullName: string = '';
  phoneNumber = '';
  placeholder: string = 'Select upto 2 categories'
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService, private toster: ToastrService) { }
  signUp = { firstName: '', lastName: '', email: '', phoneNumber: '', password: '', role: 1, selectedCategoryIds: this.selectedCategoryIds };
  userEmail = '';
  confirmSignUp = { email: '', verificationCode: '', password: '', userType: 1 };
  vendorsignup = false;
  showEmailAlreadyExists = false
  showEmptyEmail = false
  showEmptyPassword = false

  dropdownSettings = {
    singleSelection: false, // Allow multiple selections
    idField: 'id', // Property name for the ID
    textField: 'name', // Property name for the display text
    //selectAllText: 'Select All', // Text for the "Select All" option
    //unSelectAllText: 'Unselect All', // Text for the "Unselect All" option
    itemsShowLimit: 2, // Show a maximum of 3 selected items
    allowSearchFilter: true, // Enable search filter
    enableCheckAll: false,
    limitSelection: 2,
    clearSearchFilter: true,
    placeholder: 'Select upto 2 categories',
    maxHeight: 300
  };

  ngOnInit(): void {
    this.GetAllCategory();
  }
  // handleVerificationCodeChange(index: number, event: Event) {
  // const inputValue = (event.target as HTMLInputElement).value;
  // this.confirmSignUp.verificationCode = this.confirmSignUp.verificationCode.substring(0, index) + inputValue + this.confirmSignUp.verificationCode.substring(index + 1);
  // }
  // handleVerificationCodeChange(event: Event) {
  // const inputValue = (event.target as HTMLInputElement).value;
  // this.confirmSignUp.verificationCode += inputValue;
  //  
  // this.confirmSignUp.verificationCode = String(this.confirmSignUp.verificationCode);
  // }
  handleVerificationCodeChange(inputValue: string) {
    this.confirmSignUp.verificationCode = inputValue;
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
    return false;
  }

  SignUp() {
    this.isloading = true;
    // Split full name into first name and last name
    const nameParts = this.fullName.indexOf(' ');
    console.log('Name Parts:', nameParts);
    if (nameParts >= 0) {
      this.signUp.firstName = this.fullName.slice(0, nameParts);
      this.signUp.lastName = this.fullName.slice(nameParts + 1);
    }
    else
      this.signUp.firstName = this.fullName
    this.signUp.phoneNumber = this.phoneNumber.toString();
    this.signUp.selectedCategoryIds = this.selectedCategoryIds;
    this.apiService.SignUp(this.signUp).subscribe(response => {
      const isValidatedResponse = this.isValidated(response)
      console.log('isValidatedResponse', isValidatedResponse)
      if (!isValidatedResponse) {
        this.toster.error(response.message, response.errorCode, { positionClass: 'toast-top-right' });
        return
      };
      this.vendorsignup = !this.vendorsignup;
      localStorage.setItem('practitionerPasswordEmail', this.userEmail);
      console.log('Signup successful', response);
    }, error => {
      // Handle login error here
      if (error.status == 400) {
        this.showEmptyEmail = !this.showEmptyEmail
      }
      console.log('Login failed', error);
      // Display error message or take appropriate action
    }).add(() => {
      this.isloading = false;
    })
  }
  handleUserNotConfirmedError() {
    // Make your API call or perform other actions here
    console.log('User is not confirmed. Handling the error...');
  }
  ConfirmSignUp() {
    this.isloading = true;
    this.confirmSignUp.password = this.signUp.password
    this.confirmSignUp.email = this.signUp.email;
    this.apiService.ConfirmSignUp(this.confirmSignUp).subscribe(response => {
      console.log(' successful', response);
      if (response.status) {
        if (response.result) {
          localStorage.setItem('userData', JSON.stringify(response.result[0]))

          localStorage.setItem('sessionType', 'true');
          this.router.navigate(['/ProfileDetailing']);
        }
      }
      else {
        alert(response.message)
      }
    }, error => {
      console.error(' failed', error);
    }).add(() => {
      this.isloading = false;
    })
  }
  ResendSignUpOTP() {
    this.apiService.ResendSignUpOTP(this.signUp.email).subscribe(response => {
      console.log('Login successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Login failed', error);
      });
  }

  onCategorySelect(event: any) {
    this.selectedCategoryIds.push(event.id)
  }

  onCategoryUnselect(event: any) {
    this.selectedCategoryIds = this.selectedCategoryIds.filter((id) => id != event.id)
  }
  GetAllCategory() {
    this.apiService.GetAllCategory().subscribe(response => {
      this.categories = response.map((category: { id: any; name: any; parentId: any; displayName: any; }) => {
        return {
          id: category.id,
          name: category.name,
          parentId: category.parentId,
          displayName: category.displayName
        };
      });
      console.log('Categories:', this.categories);
      //console.log('Login successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('Login failed', error);
      });
  }
  toggleotpsection() {
    this.vendorsignup = !this.vendorsignup;
  }
  navigatetosignin() {
    this.router.navigate(['/vendorsignin']);
  }
  navigatetohome() {
    this.router.navigate(['']);
  }
  // navigatetoprofiledetailing() {
  // this.router.navigate(['/ProfileDetailing']);
  // }
  refreshPage() {
    window.location.reload();
  }

  isloading = false;
  toggleloading() {
    this.isloading = true;
  }
  navigatetovendors() {
    this.router.navigate(['/vendors']);
  }

}
