import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consumer-landing-page',
  templateUrl: './consumer-landing-page.component.html',
  styleUrls: ['./consumer-landing-page.component.css']
})
export class ConsumerLandingPageComponent {
  constructor(private router: Router) { }
  navigateTosigninconsumer() {
    this.router.navigate(['/consumersignin']);
  }
  navigatetosignup() {
    this.router.navigate(['/consumersignup']);
  }
  navigateTohomepage() {
    this.router.navigate(['']);
  }

  slides = [
      { img: "assets/p 4 (1).png" },
      { img: "assets/p 4 (3).png" },
      { img: "assets/p 4 (4).png" },
      { img: "assets/p 5.png" },
      {img: "assets/p 4 (2).png"}
    ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
  

}
