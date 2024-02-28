import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPagEComponent } from './landing-pag-e/landing-pag-e.component';
import { VendorsigninComponent } from './vendorsignin/vendorsignin.component';





@NgModule({
  declarations: [
    LandingPagEComponent,
    VendorsigninComponent
   
  ],
  imports: [
    CommonModule,
    
  ],
  
})
export class VendorModule { }
