import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from 'src/app/Service/apiService';

@Component({
  selector: 'app-feature-services',
  templateUrl: './feature-services.component.html',
  styleUrls: ['./feature-services.component.css']
})
export class FeatureServicesComponent {
  
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService) { }
  // service:any
     pageNo=1
      pageSize=15
      service: any = [];
      // totalItems = 0;
  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userData') ?? '');
    const userId = userData?.user?.id?.toString() ?? '';
    let modal={
      userId:userId,
      pageNo:this.pageNo,
      pageSize:this.pageSize
    }
    this.apiService.PractitionerAddedServicebyid(modal).subscribe(
      (response: any[]) => {
       console.log('par',response);
       this.service = response;
      //  this.totalItems = response.length;
       
      },
      error => {
        console.error('Failed to fetch categories', error);
      }
    );
  }

  navigatetoaddservice(){
    this.router.navigate(['/AddServices']);
  }
  
}

