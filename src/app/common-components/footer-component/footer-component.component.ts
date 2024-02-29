import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
  
})

export class FooterComponentComponent {
  @Input() isLandingPage: boolean | undefined;
  
}
