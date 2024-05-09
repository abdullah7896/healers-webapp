import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  // router: any;
  constructor(private router:Router){}
  onAddServiceClick() {
    this.router.navigateByUrl('/AddServices');
  }
}
