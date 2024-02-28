import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';



@NgModule({
  declarations: [
  
  
    ChooseUsComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    
  ]
})
export class CommonComponentsModule { }
