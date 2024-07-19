import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { apiService } from 'src/app/Service/apiService';

@Component({
  selector: 'app-dashbord-sidebar',
  templateUrl: './dashbord-sidebar.component.html',
  styleUrls: ['./dashbord-sidebar.component.css']
})
export class DashbordSidebarComponent {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  // showProfileSection: boolean = false;
  isOnlineChecked: boolean = false;
  isOnsiteChecked: boolean = false;
  isOnlineDisabled: boolean = true;
  isOnsiteDisabled: boolean = true;
  // showProfileSection: boolean | undefined;
  showProfileSection: boolean = false;
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService,private spineer:NgxSpinnerService) { }

  navigatetohome(){
    this.router.navigate(['']);
  }
  imageUrl: string | undefined;
  selectProfilePhoto(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }
  onFileSelected(event:any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  selectedImages: string[] = [];
 selectImage(event: any) {
    const files: File[] = Array.from(event.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImages.push(reader.result as string);
        this.toogletext();
      };
      reader.readAsDataURL(file);
    });
  }

  showimage = true;
  toggleimg(){
    this.showimage = !this.showimage
  }

  showtext =true;
  toogletext(){
    this.showtext =!this.showtext
  }
  toggleProfileSection(show: boolean): void {
    this.showProfileSection = show;
    this.showdashbord = false;

}
showdashbord: boolean = true;
toggledashbordsection(show: boolean): void {
  this.showProfileSection = false; // Hide profile section
  this.showdashbord = show;
}
email:string | undefined;
fullName: string | undefined;
phone: number | undefined;
address: string | undefined;
apiAddress:string|undefined

apicall(){
  this.spineer.show();
  const userData = JSON.parse(localStorage.getItem('userData') ?? '');
    const userId = userData?.user?.id?.toString() ?? '';
  this.apiService.PractitionergetById(userId).subscribe(
    (response) => {
      this.email = response?.result[0]?.email ?? '';
      const firstName = response?.result[0]?.firstName ?? '';
      const lastName = response?.result[0]?.lastName ?? '';
      this.fullName = `${firstName} ${lastName}`;
      this.phone = response?.result[0]?.phoneNumber ?? '';
        // this.address = response?.result[0]?.bussinessDetail?.address ?? '';
        this.apiAddress = response?.result[0]?.bussinessDetail?.address ?? '';
        this.address = this.apiAddress;
        this.imageUrl = response?.result[0]?.userImages?.profileImage ?? 'assets/by_default_image.png';

        // this.imageUrl = response?.result[0]?.userImages ?? 'assets/by_default_image.png';
       
        const selectedCategoryNames = response?.result[0]?.categories?.map((category: { name: string; }) => category.name) ?? [];
        this.selectedCategoryIds = this.categories
          ?.filter((category: { name: string; }) => selectedCategoryNames.includes(category.name))
          const sessionType = response?.result[0]?.bussinessDetail?.sessionType ?? 0;
        this.updateCheckboxStatus(sessionType);
      console.log('ParctitionerPreferences user id:', response);
      this.spineer.hide();
      // this.router.navigate(['/Practitioners-Profile']);
    },
    (error) => {
      // this.toster.error('forbidden','Error',{ positionClass: 'toast-top-right' });
      console.error('ParctitionerPreferences id API Error:', error);
      this.spineer.hide();
    }
  );
}
updateCheckboxStatus(sessionType: number): void {
  this.isOnlineChecked = sessionType === 0 || sessionType === 2;
  this.isOnsiteChecked = sessionType === 1 || sessionType === 2;
  this.isOnlineDisabled = sessionType !== 2;
  this.isOnsiteDisabled = sessionType !== 2;
}

public categories: any[] = [];
public selectedCategoryIds: any[] = [];
placeholder: string = 'Select upto 2 categories'
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
  maxHeight: 200,
  dropdownStyle: {
    'z-index': '1000' // Set your desired z-index value
  }
  
};
ngOnInit(): void {
  this.GetAllCategory();
  this.apicall();
  
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
        displayName: category.displayName,
        
      };
    });
    console.log('Categories:', this.categories);
   
  },
    error => {
      console.error('Login failed', error);
    });
}


navigatetoprofile(){
  this.router.navigate(['/Practitioners-Profile']);
}
navigatetodashbord(){
  this.router.navigate(['/Practitioners']);
}
navigatetoservice(){
  this.router.navigate(['/Services']);
}

}
