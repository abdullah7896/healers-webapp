import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from 'src/app/Service/apiService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-detailing',
  templateUrl: './profile-detailing.component.html',
  styleUrls: ['./profile-detailing.component.css']
})
export class ProfileDetailingComponent {
   categoryNames: string[] = [];
    userData: any;
    tags1: string[] = [];
    tags2:string[]=[]
  
  constructor(private router: Router, private apiService: apiService, private httpClient: HttpClient) { }

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
  
  
  
  
addtags(){
  const userData = JSON.parse(localStorage.getItem('userData')??'');
  const userId = userData?.user?.id?.toString() ?? '';
  const categoryId1 = userData?.user?.categories?.[0]?.id;
  const categoryId2 = userData?.user?.categories?.[1]?.id;
  const categoryzero=categoryId1;
  const categoryone=categoryId2
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
        tags:this.tags2.map((tag: any) => tag.value).join('|')
      }
    ]
  };
    this.apiService.ParctitionerPreferences(payload).subscribe(
      (response) => {
       
        console.log('ParctitionerPreferences API Response:', response);
        this.firstsection = !this.firstsection;
      },
      (error) => {
        
        console.error('ParctitionerPreferences API Error:', error);
      }
    );
  }
  firstsection = false;

  togglefirstsection() {
    this.firstsection = !this.firstsection;
  }
  secondsection = false;

  togglesecondsection() {
    this.secondsection = !this.secondsection;
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
  navigatetohome() {
    this.router.navigate(['']);
  }
  
  
  
  
  
}
