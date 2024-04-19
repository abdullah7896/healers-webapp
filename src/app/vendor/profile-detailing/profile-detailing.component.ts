import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from 'src/app/Service/apiService';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-detailing',
  templateUrl: './profile-detailing.component.html',
  styleUrls: ['./profile-detailing.component.css']
})

export class ProfileDetailingComponent {

  categoryNames: string[] = [];
  userData: any;
  tags1: string[] = [];
  tags2: string[] = []
  address: any;
  timeZone: any;
  description: any;
  isOnSite: boolean = false;
  isOnline: boolean = false;
  
  sessiontype: number | undefined;
  constructor(private router: Router, private apiService: apiService, private httpClient: HttpClient, private toster:ToastrService) { }
  onSessionTypeChange(event:any){
    if (this.isOnline && this.isOnSite) {
      this.sessiontype = 2; 
    } else if (this.isOnline) {
      this.sessiontype = 0;
    } else if (this.isOnSite) {
      this.sessiontype = 1; 
    } else {
      this.sessiontype = -1; 
    }
  }
  ngOnInit(): void {
    const userDataString = localStorage.getItem('userData');
    console.log('userDataString:', userDataString); // Log the userDataString
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
      console.log('this.userData:', this.userData); // Log the userData object

      // Retrieve category names from userData
      if (this.userData.user && this.userData.user.categories) {
        this.categoryNames = this.userData.user.categories.map((category: { name: string; }) => category.name);
        console.log('categoryNames:', this.categoryNames); // Log category names to console
      } else {
        console.error('User categories not found');
      }
    } else {
      console.error('userData not found in localStorage');
    }


  }

  addtags() {
    if (this.tags2.length === 0) {
      this.toster.error('Tags field is required','Error',{ positionClass: 'toast-top-right' });
      return;
    }
    const userData = JSON.parse(localStorage.getItem('userData') ?? '');
    const userId = userData?.user?.id?.toString() ?? '';
    const categoryId1 = userData?.user?.categories?.[0]?.id;
    const categoryId2 = userData?.user?.categories?.[1]?.id;
    const categoryzero = categoryId1;
    const categoryone = categoryId2
    console.log(userId);
    const payload = {
      userId: userId,
      categoriesWithTags: [
        {
          categoryId: categoryzero,
          tags: this.tags1.map((tag: any) => tag.value).join('|')
        },
        {
          categoryId: categoryone,
          tags: this.tags2.map((tag: any) => tag.value).join('|')
        }
      ]
    };
    this.apiService.ParctitionerPreferences(payload).subscribe(
      (response) => {

        console.log('ParctitionerPreferences API Response:', response);
        this.firstsection = !this.firstsection;
      },
      (error) => {
        this.toster.error('forbidden','Error',{ positionClass: 'toast-top-right' });
        console.error('ParctitionerPreferences API Error:', error);
      }
    );
  }

  bussinessdetailsapi() {
   
    if (!this.description) {
      this.toster.error('Please enter a description','Error',{ positionClass: 'toast-top-right' });
      return;
    }
    if (!this.address) {
      this.toster.error('Please enter an address','Error',{ positionClass: 'toast-top-right' });
      return;
    }
   if (!this.description && !this.address) {
    this.toster.error('You have not entred both Address & description ','Error',{ positionClass: 'toast-top-right' });
    }
   const userData = JSON.parse(localStorage.getItem('userData') ?? '');
    const userId = userData?.user?.id?.toString() ?? '';
    
    // const utcTimeZone = new Date().toLocaleString('en', {timeZone: timeZone, timeZoneName: 'short'}).split(' ')[2];

    const currentDate = new Date().toISOString().split('T')[0];
    const payload = {
      userId: userId,
      sessiontype: this.sessiontype,
      address: this.address,
      description: this.description,
      date: currentDate
    }
    this.apiService.PractitionerBussinessPrefrences(payload).subscribe(
      (response) => {
        console.log('ParctitionerPreferences API Response:', response);
        this.secondsection = !this.secondsection;
      },
      (error) => {
        this.toster.error('forbidden','Error',{ positionClass: 'toast-top-right' });
        console.error('ParctitionerPreferences API Error:', error);
      }
    );
  }
  uploaduserimage() {
    const userData = JSON.parse(localStorage.getItem('userData') ?? '');
    const userId = userData?.user?.id?.toString() ?? '';
    if (!userId) {
      this.toster.error('User ID not found','Error',{ positionClass: 'toast-top-right' });
      console.error('User ID not found');
      return;
    }

    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (!fileInput.files || !fileInput.files[0]) {
      this.toster.error('No file selected','Error',{ positionClass: 'toast-top-right' });
      console.error('No file selected');
      return;
    }

    const file: File = fileInput.files[0];

    const formData = new FormData();
    formData.append('ProfileImage', file, file.name);
    formData.append('userId', userId);

    console.log(formData);

    this.apiService.PractitionerUploadUserImg(formData).subscribe(
      (response) => {

        console.log('ParctitionerPreferences API Response:', response);

      },
      (error) => {
        this.toster.error('forbidden','Error',{ positionClass: 'toast-top-right' });
        console.error('ParctitionerPreferences API Error:', error);
      }
    );
  }
  previewImageUrl: string = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.displayPreview(file);
  }
  displayPreview(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewImageUrl = reader.result as string;
    };
  }
firstsection = false;

  togglefirstsection() {
    this.firstsection = !this.firstsection;
  }
  secondsection = false;

  togglesecondsection() {
    this.secondsection = !this.secondsection;
  }
 navigatetohome() {
    this.router.navigate(['']);
  }

}
