import { Component } from '@angular/core';
import { HeroComponentComponent } from '../common-components/hero-component/hero-component.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  
})
export class LandingPageComponent {
  constructor(private router: Router) { }
  navigatetootherpage(){
    this.router.navigate(['/landing2']);
  }

}
