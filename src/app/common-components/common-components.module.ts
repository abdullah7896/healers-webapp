import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';



@NgModule({
  declarations: [
    FooterComponentComponent,
    HeroComponentComponent,
    ChooseUsComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    FooterComponentComponent,
    HeroComponentComponent,
    ChooseUsComponent
  ]
})
export class CommonComponentsModule { }
