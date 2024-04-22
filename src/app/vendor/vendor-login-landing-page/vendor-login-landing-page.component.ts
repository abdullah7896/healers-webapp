import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from 'src/app/Service/apiService';

@Component({
  selector: 'app-vendor-login-landing-page',
  templateUrl: './vendor-login-landing-page.component.html',
  styleUrls: ['./vendor-login-landing-page.component.css']
})
export class VendorLoginLandingPageComponent {
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService) { }

  navigatetohome(){
    this.router.navigate(['']);
  }
  imageUrl: string | undefined;
  onFileSelected(event:any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
