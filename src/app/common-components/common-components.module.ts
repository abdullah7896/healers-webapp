import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';



@NgModule({
  declarations: [
    HeroComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroComponentComponent
  ]
})
export class CommonComponentsModule { }
