import { Component,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';

@Component({
  selector: 'app-vendor-login-landing-page',
  templateUrl: './vendor-login-landing-page.component.html',
  styleUrls: ['./vendor-login-landing-page.component.css']
})
export class VendorLoginLandingPageComponent {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  // showProfileSection: boolean | undefined;
  showProfileSection: boolean = false;
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService) { }

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
    // this.showProfileSection = show;
    this.showProfileSection = show;
    this.showdashbord = false;

}
showdashbord: boolean = true;
toggledashbordsection(show: boolean): void {
  // this.toggleProfileSection(true);
  // this.showdashbord = show;
  // this.toggleProfileSection(true);
  this.showProfileSection = false; // Hide profile section
  this.showdashbord = show;
}

 
}
