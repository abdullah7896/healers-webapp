import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consumer-landing-page',
  templateUrl: './consumer-landing-page.component.html',
  styleUrls: ['./consumer-landing-page.component.css']
})
export class ConsumerLandingPageComponent {
  constructor(private router: Router) { }
  navigateTosigninconsumer(){
    this.router.navigate(['/consumersignin']); 
  }
  navigatetosignup(){
    this.router.navigate(['/consumersignup']); 
  }
}
