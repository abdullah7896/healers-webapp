import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPagEComponent } from './landing-pag-e/landing-pag-e.component';
import { VendorsigninComponent } from './vendorsignin/vendorsignin.component';
import { FooterComponentComponent } from '../common-components/footer-component/footer-component.component';
import { ChooseUsComponent } from '../common-components/choose-us/choose-us.component';





@NgModule({
  declarations: [
    LandingPagEComponent,
    VendorsigninComponent
    
  ],
  imports: [
    CommonModule,
    FooterComponentComponent,
    
  ],
  
})
export class VendorModule { }
