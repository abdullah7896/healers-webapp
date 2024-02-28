import { Component } from '@angular/core';
import { HeroComponentComponent } from 'src/app/common-components/hero-component/hero-component.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-pag-e',
  templateUrl: './landing-pag-e.component.html',
  styleUrls: ['./landing-pag-e.component.css'],

})

export class LandingPagEComponent {
  constructor(private router: Router) { }
  navigateTosignin(){
    this.router.navigate(['/vendorsignin']); 
  }
}
